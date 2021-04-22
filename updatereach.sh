docker container kill $(docker ps -q)
./reach/reach clean
./reach/reach update

npm update @reach-sh

./reach/reach compile ./reach/index.rsh
mv ./reach/build/index.main.mjs ./build/index.main.mjs

npm run build src/index.js