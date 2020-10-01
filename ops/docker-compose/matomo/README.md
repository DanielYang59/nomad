This docker-compose can be used to run the user-data tracking server *Matomo* and its
database. This is currently not used by the official nomad production deployment.

The example proxy rules use a path that does not hint at matomo/piwik and that rewrite
key files (piwik.js, piwik.php) that cause many tracking events beeing blocked by
ad-blocker or similar browser plug-ins.

We use a mount to add a IP database to matomo. The IP db is downloaded from:
https://download.db-ip.com/free/dbip-city-lite-2020-07.mmdb.gz