# Go to droplet
ssh -t root@157.245.134.21 rm -Rf /var/www/html/aminochem-front/dist/
# Transfer new dist folder content
scp -r ./dist root@157.245.134.21:/var/www/html/aminochem-front
# Go to droplet
ssh -t root@157.245.134.21 sudo service nginx restart
# Motivational message :P
echo "¡You're the JEDI MASTER of the DepLoY!"

