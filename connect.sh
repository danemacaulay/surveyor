eval "$(docker-machine env docker-machine-vm)"

docker run -it --link sumosql:mysql --rm mysql/mysql-server:latest sh -c 'exec mysql -h"192.168.99.100" -P"3306" -uroot -p"root-password-123"'
