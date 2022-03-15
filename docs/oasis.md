# Operating an OASIS

Originally, NOMAD Central Repository is a service run at Max-Planck's computing facility in Garching, Germany.
However, the NOMAD software is Open-Source, and everybody can run it. Any service that
uses NOMAD software independently is called a *NOMAD OASIS*. A *NOMAD OASIS* does not
need to be fully isolated. For example, you can publish uploads from your OASIS to the
central NOMAD installation.

While different use cases require different setups, this documentation
describes the simplest setup of a NOMAD OASIS. It would allow a group to use NOMAD for
local research data management, while using NOMAD's central user-management and the
already registered users.
There are several environment in which you can run a NOMAD OASIS: base-metal linux,
docker with docker-compose, and in a kubernetes cluster. We recommend using docker/docker-compose.

## Before you start

### Choosing hardware and installation type

Comming soon ...

### Using the central user management

We need to register some information about your OASIS in the central user management:

- The hostname for the machine you run NOMAD on. This is important for forwarding between
your OASIS and the central NOMAD user management and to allow your users to upload files (via GUI or API).
Your machine needs to be accessible under this hostname from the public internet. The host
name needs to be registered in the central NOMAD in order to configure the central user-
management correctly.
- Your NOMAD account should act as an admin account for your OASIS. This account must be declared
to the central NOMAD as an OASIS admin in order to give it the necessary rights in the central user management.
- You must know your NOMAD user-id. This information has to be provided by us.

Please [write us](mailto:support@nomad-lab.eu) to register your NOMAD account as an OASIS
admin and to register your hostname. Please replace the indicated configuration items with
the right information.


In principle, you can also run your own user management. This is not yet documented.

## Docker and docker compose

### Pre-requisites

NOMAD software is distributed as a set of docker containers and there are also other services required
that can be run with docker. Further, we use docker-compose to setup
all necessary container in the simplest way possible.

You will need a single computer, with **docker** and **docker-compose** installed.

The following will run all necessary services with docker. These comprise: a **mongodb**
database, an **elasticsearch**, a **rabbitmq** distributed task queue, the NOMAD **app**,
NOMAD **worker**, and NOMAD **gui**. In this [introduction](index.md#architecture),
you will learn what each service does and why it is necessary.

### Configuration overview

All docker container are configured via docker-compose and the respective `docker-compose.yaml` file.
Further, we will need to mount some configuration files to configure the NOMAD services within
their respective containers.

There are three files to configure:

- `docker-compose.yaml`
- `nomad.yaml`
- `nginx.conf`

In this example, we have all files in the same directory (the directory we are also working in).
You can download example files from
[here](https://gitlab.mpcdf.mpg.de/nomad-lab/nomad-FAIR/tree/master/ops/docker-compose/nomad-oasis/).

### docker-compose.yaml

The most basic `docker-compose.yaml` to run an OASIS looks like this:

```yaml
version: '3.4'

x-common-variables: &nomad_backend_env
    NOMAD_RABBITMQ_HOST: rabbitmq
    NOMAD_ELASTIC_HOST: elastic
    NOMAD_MONGO_HOST: mongo

services:
    # broker for celery
    rabbitmq:
        restart: always
        image: rabbitmq:3.7.17
        container_name: nomad_oasis_rabbitmq
        environment:
            - RABBITMQ_ERLANG_COOKIE=SWQOKODSQALRPCLNMEQG
            - RABBITMQ_DEFAULT_USER=rabbitmq
            - RABBITMQ_DEFAULT_PASS=rabbitmq
            - RABBITMQ_DEFAULT_VHOST=/
        volumes:
            - nomad_oasis_rabbitmq:/var/lib/rabbitmq

    # the search engine
    elastic:
        restart: always
        image: docker.elastic.co/elasticsearch/elasticsearch:6.8.15
        container_name: nomad_oasis_elastic
        environment:
            - discovery.type=single-node
        volumes:
            - nomad_oasis_elastic:/usr/share/elasticsearch/data

    # the user data db
    mongo:
        restart: always
        image: mongo:4
        container_name: nomad_oasis_mongo
        environment:
            - MONGO_DATA_DIR=/data/db
            - MONGO_LOG_DIR=/dev/null
        volumes:
            - nomad_oasis_mongo:/data/db
        command: mongod --logpath=/dev/null # --quiet

    # nomad worker (processing)
    worker:
        restart: always
        image: gitlab-registry.mpcdf.mpg.de/nomad-lab/nomad-fair:north
        container_name: nomad_oasis_worker
        environment:
            <<: *nomad_backend_env
            NOMAD_SERVICE: nomad_oasis_worker
        links:
            - rabbitmq
            - elastic
            - mongo
        volumes:
            - ./nomad.yaml:/app/nomad.yaml
            - ./.volumes/fs:/app/.volumes/fs
        command: python -m celery worker -l info -A nomad.processing -Q celery

    # nomad app (api + gui)
    app:
        restart: always
        image: gitlab-registry.mpcdf.mpg.de/nomad-lab/nomad-fair:north
        container_name: nomad_oasis_app
        environment:
            <<: *nomad_backend_env
            NOMAD_SERVICE: nomad_oasis_app
            NOMAD_SERVICES_API_PORT: 80
        links:
            - rabbitmq
            - elastic
            - mongo
        volumes:
            - ./nomad.yaml:/app/nomad.yaml
            - ./.volumes/fs:/app/.volumes/fs
        command: ./run.sh

    # nomad remote tools hub (JupyterHUB, e.g. for AI Toolkit)
    hub:
        restart: always
        image: gitlab-registry.mpcdf.mpg.de/nomad-lab/nomad-fair:north
        container_name: nomad_oasis_hub
        environment:
            <<: *nomad_backend_env
            NOMAD_SERVICE: nomad_oasis_hub
            NOMAD_NORTH_DOCKER_NETWORK: nomad_oasis_network
            NOMAD_NORTH_HUB_IP_CONNECT: hub
            NOMAD_NORTH_HUB_IP: '0.0.0.0'
            NOMAD_NORTH_HUB_HOST: 'hub'
            NOMAD_SERVICES_API_HOST: app
        links:
            - app
        volumes:
            - ./nomad.yaml:/app/nomad.yaml
            - /var/run/docker.sock:/var/run/docker.sock
            - ./.volumes/fs:/app/.volumes/fs
        command: python -m nomad.cli admin run hub
        user: "1000:991"

    # nomad gui (a reverse proxy for nomad)
    gui:
        restart: always
        image: nginx:1.13.9-alpine
        container_name: nomad_oasis_gui
        command: nginx -g 'daemon off;'
        volumes:
            - ./nginx.conf:/etc/nginx/conf.d/default.conf
        links:
            - app
            - hub
        ports:
            - 8001:80

volumes:
    nomad_oasis_mongo:
    nomad_oasis_elastic:
    nomad_oasis_rabbitmq:
    nomad_oasis_files:

networks:
    default:
        name: nomad_oasis_network
```

Changes necessary:
- The group in the value of the hub's user parameter needs to match the docker group
on the host. This should ensure that the user which runs the hub, has the rights to access the hosts docker.

A few things to notice:

- All services use docker volumes for storage. This could be changed to host mounts.
- It mounts three configuration files that need to be provided (see below): `nomad.yaml`, `nginx.conf`, `env.js`.
- The only exposed port is `80`. This could be changed to a desired port if necessary.
- The NOMAD images are pulled from our gitlab in Garching, the other services use images from a public registry (*dockerhub*).
- The NOMAD images we use are tagged `north`. This is the branch where we currently develop the nomad remote tools.
- All container will be named `nomad_oasis_*`. These names can be used later to reference the container with the `docker` cmd.
- The NOMAD images we use are tagged `stable`. This could be replaced with concrete version tags.
- The services are setup to restart `always`, you might want to change this to `no` while debugging errors to prevent
indefinite restarts.

### nomad.yaml

NOMAD app and worker read a `nomad.yaml` for configuration.

```yaml
services:
  api_host: '<your-host>'
  api_base_path: '/nomad-oasis'
  admin_user_id: '<your admin user id>'

fs:
  staging_external: <abs path to nomad>/.volumes/fs/staging

hub:
  jupyterhub_crypt_key: '<generated crypt key>'
  users_fs: <abs path to nomad>/.volumes/fs/hub/users
  shared_fs: <abs path to nomad>/.volumes/fs/hub/shared
  hub_ip_connect: '172.17.0.1'

keycloak:
  realm_name: fairdi_nomad_prod
  username: '<your admin username>'
  password: '<your admin user password>'
  oasis: true

meta:
  deployment: 'oasis'
  deployment_id: '<your-host>'
  maintainer_email: '<oasis admin email>'

mongo:
    db_name: nomad_v1

elastic:
    entries_index: nomad_v1_entries
    materials_index: nomad_v1_materials
```

You need to change the following:

- Replace `your-host`.
- `api_base_path` defines the path under which the app is run. It needs to be changed if you use a different base path.
- The admin user credentials (id, username, password, email).
- Replace `abs path to nomad` with the absolute path to the directory where you are
running the NOMAD Oasis docker-compose, i.e. the current directory. You should also create
a `.volumes` directory. This is where NOMAD will keep all files.
- Replace `your-host` and admin credentials respectively.
- `generated crypt key` needs to be replaced with an actual key. You can generate one
with `openssl rand -hex 32`.
- On Windows or MacOS, you have to change `172.17.0.1` with `host.docker.internal`.

A few things to notice:

- Be secretive about your admin credentials; make sure this file is not publicly readable.
- We will use your hostname as `deployment_id`. When you publish uploads from your Oasis to the
central NOMAD, this will be added as upload metadata and allows to see where the upload came
from.

### nginx.conf

The GUI container serves as a proxy that forwards request to the app container. The
proxy is an nginx server and needs a configuration similar to this:

```none
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server {
    listen        80;
    server_name   www.example.com;
    proxy_set_header Host $host;

    location / {
        proxy_pass http://app:8000;
    }

    location ~ /nomad-oasis\/?(gui)?$ {
        rewrite ^ /nomad-oasis/gui/ permanent;
    }

    location /nomad-oasis/gui/ {
        proxy_intercept_errors on;
        error_page 404 = @redirect_to_index;
        proxy_pass http://app:8000;
    }

    location @redirect_to_index {
        rewrite ^ /nomad-oasis/gui/index.html break;
        proxy_pass http://app:8000;
    }

    location ~ \/gui\/(service-worker\.js|meta\.json)$ {
        add_header Last-Modified $date_gmt;
        add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
        if_modified_since off;
        expires off;
        etag off;
        proxy_pass http://app:8000;
    }

    location ~ /api/v1/uploads(/?$|.*/raw|.*/bundle?$)  {
        client_max_body_size 35g;
        proxy_request_buffering off;
        proxy_pass http://app:8000;
    }

    location ~ /api/v1/.*/download {
        proxy_buffering off;
        proxy_pass http://app:8000;
    }

    location ~ /hub/ {
        proxy_pass http://hub:9000;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # websocket headers
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header X-Scheme $scheme;

        proxy_buffering off;
    }
}
```

You need to change:

- Replace `<your-host>`

A few things to notice:

- It configures the base path (`nomad-oasis`) at multiple places. It needs to be changed, if you use a different base path.
- You can use the server for additional content if you like.
- `client_max_body_size` sets a limit to the possible upload size.
- If you operate the GUI container behind another proxy, keep in mind that your proxy should not buffer requests/responses to allow streaming of large requests/responses for `../api/uploads` and `../api/raw`.

### gunicorn

Gunicorn is the WSGI-server that runs the nomad app. Consult the
[gunicorn documentation](https://docs.gunicorn.org/en/stable/configure.html) for
configuration options.

### Running NOMAD

If you prepared the above files, simply use the usual `docker-compose` commands to start everything.

To make sure you have the latest docker images for everything, run this first:
```sh
docker-compose pull
```

In the beginning and to simplify debugging, it is recommended to start the services separately:
```sh
docker-compose up -d mongodb elastic rabbitmq
docker-compose up app worker gui
```

The `-d` option runs container in the background as *daemons*. Later you can run all at once:
```sh
docker-compose up -d
```

You can also use docker to stop and remove faulty containers that run as *daemons*:
```sh
docker stop nomad_oasis_app
docker rm nomad_oasis_app
```

If everything works, the gui should be available under:
```none
http://<your host>/nomad-oasis/gui/
```

If you run into problems, use the dev-tools of you browser to check the javascript logs
or monitor the network traffic for HTTP 500/400/404/401 responses.

To see if at least the api works, check
```none
http://<your host>/nomad-oasis/alive
http://<your host>/nomad-oasis/api/info
```

To see logs or 'go into' a running container, you can access the individual containers
with their names and the usual docker commands:

```sh
docker logs nomad_oasis_app
```

```sh
docker exec -ti nomad_oasis_app /bin/bash
```

If you want to report problems with your OASIS. Please provide the logs for

- nomad_oasis_app
- nomad_oasis_worker
- nomad_oasis_gui

## Base Linux (without docker)

### Pre-requisites

We will run NOMAD from the *nomad-lab* Python package. This package contains all the necessary
code to run the processing, api, and gui. But, it is missing the necessary databases. You might be
able to run NOMAD in user space.

You will need:

- preferably a linux computer, which Python 3.7, preferable a Python virtual environment
- elasticsearch 6.x, running without users and authentication, preferable on the default settings
- mongodb 4.x, running without users and authentication, preferable on the default settings
- rabbitmq 3.x, running without users and authentication, preferable on the default settings
- nginx
- an empty directory to work in

### Install the NOMAD Python package

You should install everything in a virtual environment. For example like this:
```sh
virtualenv -p `which python3` nomadpyenv
source nomadpyenv/bin/activate
```

You can simply install the Python package from pypi:
```sh
pip install nomad-lab[all]
```

If you need the latest version, you can also download the latest package from our
"beta" installation.
```sh
curl "https://nomad-lab.eu/prod/rae/beta/dist/nomad-lab.tar.gz" -o nomad-lab.tar.gz
pip install nomad-lab.tar.gz[all]
```

### nomad.yaml

The `nomad.yaml` is our central config file. You should write a `nomad.yaml` like this:

```yaml
client:
  url: 'http://<your-host>/nomad-oasis/api'

services:
  api_base_path: '/nomad-oasis'
  admin_user_id: '<your admin user id>'

keycloak:
  realm_name: fairdi_nomad_prod
  username: '<your admin username>'
  password: '<your admin user password>'
  oasis: true

mongo:
    db_name: nomad_v0_8

elastic:
    index_name: nomad_v0_8
```

You need to change the following:

- Replace `your-host` and admin credentials respectively.
- `api_base_path` defines the path under which the app is run. It needs to be changed, if you use a different base path.

A few things to notice:

- Be secretive about your admin credentials; make sure this file is not publicly readable.

### nginx

You can generate a suitable `nginx.conf` with the `nomad` command line command that
comes with the *nomad-lab* Python package. If you server other content but NOMAD with
your nginx, you need to incorporate the config accordingly.

If you have a standard installation of nginx, this might work. Adapt to your set-up:
```sh
nomad admin ops nginx-conf > /etc/nginx/conf.d/default.conf
nginx -t
nginx -s reload
```

If you want to run nginx in docker, this might work. Adapt to your set-up:
```sh
nomad admin ops nginx-conf --host host.docker.internal > nginx.conf
docker run --rm -v `pwd`/nginx.conf:/etc/nginx/conf.d/default.conf -p 80:80 nginx:stable nginx -g 'daemon off;' &
```

### Running NOMAD

Before you start, we need to transfer your `nomad.yaml` config values to the GUI's
javascript. You need to repeat this, if you change your `nomad.yaml`. You can do this by running:
```
nomad admin ops gui-config
```

To run NOMAD, you must run two services. One is the NOMAD app, it serves the API and GUI:
```
gunicorn "${params[@]}" -b 0.0.0.0:8000 nomad.app:app
```

the second is the NOMAD worker, that runs the NOMAD processing.
```
celery worker -l info -A nomad.processing -Q celery
```

This should give you a working OASIS at `http://<your-host>/<your-path-prefix>`.

## Kubernetes

*This is not yet documented.*

## Migrating from an older version (0.8.x to 1.x)

Between versions 0.10.x and 1.x we needed to change how archive and metadata data is stored
internally in files and databases. This means you cannot simply start a new version of
NOMAD on top of the old data. But there is a strategy to adapt the data. This should
work for data based on NOMAD >0.8.0 and <= 0.10.x.

The overall strategy is to create a new mongo database, copy all information, and then
reprocess all data for the new version.

First, shutdown the OASIS and remove all old container.
```sh
docker-compose stop
docker-compose rm -f
```

Update you config files (`docker-compose.yaml`, `nomad.yaml`, `nginx.conf`) according
to the latest documentation (see above). Make sure to use index and database names that
are different. The default values contain a version number in those names, if you don't
overwrite those defaults, you should be save.

Make sure you get the latest images and start the OASIS with the new version of NOMAD:
```sh
docker-compose pull
docker-compose up -d
```

If you go to the GUI of your OASIS, it should now show the new version and appear empty,
because we are using a different database and search index now.

To migrate the data, we created a command that you can run within your OASIS' NOMAD
application container. This command takes the old database name as argument, it will copy
all data from the old mongodb to the current one. The default v8.x database name
was `nomad_fairdi`, but you might have changed this to `nomad_v0_8` as recommended by
our old Oasis documentation.

```sh
docker exec -ti nomad_oasis_app bash -c 'nomad admin upgrade migrate-mongo --src-db-name nomad_v0_8'
docker exec -ti nomad_oasis_app bash -c 'nomad admin uploads reprocess'
```

Now all your data should appear in your OASIS again. If you like, you can remove the
old index and database:

```sh
docker exec nomad_oasis_elastic bash -c 'curl -X DELETE http://elastic:9200/nomad_fairdi'
docker exec nomad_oasis_mongo bash -c 'mongo nomad_fairdi --eval "printjson(db.dropDatabase())"'
```

## Restricting access to your Oasis

An Oasis works exactly the same way the official NOMAD works. It is open and everybody
can access published data. Everybody with an account can upload data. This might not be
what you want.

Currently there are two ways to restrict access to your Oasis. First, you do not
expose the Oasis to the public internet, e.g. you only make it available on an intra-net or
through a VPN.

Second, we offer a simple white-list mechanism. As the Oasis administrator you provide a
list of accounts as part of your Oasis configuration. To use the Oasis, all users have to
be logged in and be on your white list of allowed users. To enable white-listing, you
can provide a list of NOMAD account email addresses in your `nomad.yaml` like this:

```
oasis:
    allowed_users:
        - user1@gmail.com
        - user2@gmail.com
```

## Performance considerations

If you run the OASIS on a single computer, like described here (either with docker or bare
linux), you might run into problems with processing large uploads. If the NOMAD worker
and app are run on the same computer, the app might become unresponsive, when the worker
consumes all system resources.

By default, the worker container might have as many worker processes as the system as CPU cores.
In addition, each worker process might spawn additional threads and consume
more than one CPU core.

There are multiple ways to restrict the worker's resource consumption:

- limit the number of worker processes and thereby lower the number of used cores
- disable or restrict multithreading
- limit available CPU utilization of the worker's docker container with docker

#### Limit the number of worker processes

The worker uses the Python package celery. Celery can be configured to use less than the
default number of worker processes (which equals the number of available cores). To use only
a single core only, you can alter the worker service command in the `docker-compose.yml` and
add a `--concurrency` argument:

```
command: python -m celery worker -l info -A nomad.processing --concurrency=1 -Q celery
```

See also the [celery documentation](https://docs.celeryproject.org/en/stable/userguide/workers.html#id1).

#### Limiting the use of threads

You can also reduce the usable threads that Python packages based on OpenMP could use to
reduce the threads that might be spawed by a single worker process. Simply set the `OMP_NUM_THREADS`
environment variable in the worker container in your `docker-compose.yml`:

```
services:
    worker:
        ...
        environment:
            ...
            OMP_NUM_THREADS: 1
```

#### Limit CPU with docker

You can add a `deploy.resources.limits` section to the worker service in the `docker-compose.yml`:

```
services:
    worker:
        ...
        deploy:
            resources:
                limits:
                    cpus: '0.50'
```

The number refers to the percentage use of a single CPU core.
See also the [docker-compose documentation](https://docs.docker.com/compose/compose-file/compose-file-v3/#resources).


## NOMAD Oasis FAQ

#### Why use an Oasis?
There are three reasons:

- You want to manage data in private,
- you want local availability of public NOMAD data without network restrictions,
- or you want to manage large amounts of low quality and preliminary data that is not intended for publication.

#### How to organize data in NOMAD Oasis?

##### How can I categorize or label my data?
Currently, NOMAD supports the following mechanism to organize data:

- Data always belongs to one upload, which has a main author, and is assigned various metadata, like the time the upload was created, a custom human friendly upload name, etc.
- Data can be assigned to multiple independent datasets.
- Data can hold a proprietary id called “external_id”.
- Data can be assigned multiple coauthors in addition to the main author.
- Data can be filtered and searched in various ways.

#####  Is there some rights-based visibility?
An upload can be viewed at any time by the main author, the upload coauthors, and the
upload reviewers. Other users will not be able to see the upload until it is published and
the embargo (if requested) has been lifted. The main author decides which users to register as coauthors and reviewers, when to publish and if it should be published with an embargo.
The main author and upload coauthors are the only users who can edit the upload while it is in staging.

#### How to share data with the central NOMAD?

Keep in mind, it is not entirely clear, how we will do this.

##### How to designate Oasis data for publishing to NOMAD?
Currently, you should use one of the organizational mechanism to designate data for being published to NOMAD. You can use a dedicated dataset for publishable data.

##### How to upload?

We will probably provide functionality in the API of the central NOMAD to upload data from an Oasis to the central NOMAD and provide the necessary scripts and detailed instructions. Most likely the data that is uploaded to the central NOMAD can be selected via a search query. Therefore, using a dedicated dataset, would be an easy to select criteria.

#### How to maintain an Oasis installation?

##### How to install a NOMAD Oasis?
Follow our guide: https://nomad-lab.eu/prod/rae/docs/ops.html#operating-a-nomad-oasis

##### How do version numbers work?
There are still a lot of thing in NOMAD that are subject to change. Currently, changes in the minor version number (0.x.0) designate major changes that require data migration. Changes in the patch version number (0.7.x) just contain minor changes and fixes and do not require data migration. Once we reach 1.0.0, NOMAD will use the regular semantic versioning conventions.

##### How to upgrade a NOMAD Oasis?
When we release a new version of the NOMAD software, it will be available as a new Docker image with an increased version number. You simply change the version number in your docker-compose.yaml and restart.

##### What about major releases?
Going from NOMAD 0.7.x to 0.8.x will require data migration. This means the layout of the data has changed and the new version cannot be used on top of the old data. This requires a separate installation of the new version and mirroring the data from the old version via NOMAD’s API. Detailed instructions will be made available with the new version.

##### How to move data between installations?
With the release of 0.8.x, we will clarify how to move data between installations. (See last question)

##### How to backup my Oasis?
To backup your Oasis at least the file data and mongodb data needs to be backed up. You determined the path to your file data (your uploads) during the installation. This directory can be backed up like any other file backup (e.g. rsync). To backup the mongodb, please refer to the official [mongodb documentation](https://docs.mongodb.com/manual/core/backups/). We suggest a simple mongodump export that is backed up alongside your files. The elasticsearch contents can be reproduced with the information in the files and the mongodb.