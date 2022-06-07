FROM nginx

COPY default.conf.temp /etc/nginx/conf.d/default.conf.temp

COPY web-build/. /usr/share/nginx/html

# 2 partes aquí 
# 1 - actualizar configuración con puerto asignado por heroku
# 2 - deshabilitar nginx como servicio
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.temp > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'