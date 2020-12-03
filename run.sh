# Install packages
yarn

# Build
yarn build

# Remove the folder
rm -rf /var/www/$PROJECT_NAME

# Create folder
mkdir /var/www/$PROJECT_NAME

# copy build to prod
cp -r ./build/* /var/www/$PROJECT_NAME/
