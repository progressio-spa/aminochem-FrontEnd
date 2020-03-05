# Go to droplet
ssh root@157.245.134.21
# Remove current dist folder content at nginx
rm -Rf /var/www/html/aminochem-front/dist/
# Exit from ssh connection
exit
# Transfer new dist folder content
scp -r ./dist root@157.245.134.21:/var/www/html/aminochem-front
# Go to droplet
ssh root@157.245.134.21
# Restart nginx to read the new dist content
sudo service nginx restart
# Exit from ssh connection
exit
# Motivational message :P
cat "¡You're the JEDI MASTER of the DepLoY!"

