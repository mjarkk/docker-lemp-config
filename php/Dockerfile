FROM chialab/php:7.2-fpm

RUN apt-get update && \
  apt-get install -y ffmpeg zip apt-transport-https ca-certificates curl graphicsmagick libpq-dev ssmtp && \
  apt-get clean && \
  echo 'FromLineOverride=YES' >> /etc/ssmtp/ssmtp.conf && \
  echo 'sendmail_path = "/usr/sbin/ssmtp -t"' > /usr/local/etc/php/conf.d/mail.ini