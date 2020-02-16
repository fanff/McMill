

alias cleanup="docker-compose down -v && sudo rm -rf data logdb"
alias run="docker-compose up -d && docker-compose logs -f"
