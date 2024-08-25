FROM postgres

COPY restore.sh /docker-entrypoint-initdb.d/
COPY fit_today.sql /docker-entrypoint-initdb.d/

RUN chmod +x /docker-entrypoint-initdb.d/restore.sh

# Add this line to ensure the script runs even if the database exists
RUN echo "#!/bin/bash\n/docker-entrypoint-initdb.d/restore.sh"