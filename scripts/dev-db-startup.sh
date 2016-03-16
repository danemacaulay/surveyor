eval "$(docker-machine env)"

docker run --name sumosql -e MYSQL_ROOT_PASSWORD=root-password-123 -e MYSQL_DATABASE=surveyor -e MYSQL_USER=appuser -e MYSQL_PASSWORD=appuser-password123 -d -p 3306:3306 mysql:latest
