docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kandidaty_na_rabotu-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kandidaty_na_rabotu-java/app ../../..
