PROJECT_NAME="twanluttik"

# run build
npm run build

# remove all the contents in the www folder
rm -rf /var/www/$PROJECT_NAME/*

# Create contents folder if not exist
mkdir /var/www/$PROJECT_NAME

# move the dist to the contents folder
mv -f dist/* /var/www/$PROJECT_NAME/