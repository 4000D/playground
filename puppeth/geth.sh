geth \
  --networkid=777 \
  --datadir=$HOME/.onther \
  --cache=1024 \
  --syncmode=full \
  --rpc \
  --rpcaddr '60010' \
  --rpcport 60010 \
  --ethstats='OntherClient:onther@onther.io:8180' \
  --bootnodes=enode://1f83fea95f47f7a68556234fe46bf581927eb7219f1c593da42ddeb8a4d6f296d05c0fd8fbf3ab37804499b1287199ce9cfbffd19444f9a4d602c24c98e06df9@onther.io:30313
