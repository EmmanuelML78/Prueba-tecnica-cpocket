#!/bin/sh

HOST="$1"
shift
PORT="$1"
shift

TIMEOUT=30
RETRY_INTERVAL=1

echo "⏳ Esperando que $HOST:$PORT esté disponible..."

start_ts=$(date +%s)

while :
do
  nc -z "$HOST" "$PORT" > /dev/null 2>&1
  result=$?

  if [ $result -eq 0 ]; then
    end_ts=$(date +%s)
    echo "✅ $HOST:$PORT está disponible después de $((end_ts - start_ts)) segundos."
    break
  fi

  sleep $RETRY_INTERVAL
done

# Ejecutar el siguiente comando
exec "$@"
