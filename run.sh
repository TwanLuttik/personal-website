# Install packages
yarn

# Build
yarn build

# Remove the folder
rm -rf /var/www/twanluttik

# Create folder
mkdir /var/www/twanluttik

# copy build to prod
cp -r ./build/* /var/www/twanluttik/
