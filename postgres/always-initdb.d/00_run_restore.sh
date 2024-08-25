#!/bin/bash
/docker-entrypoint-initdb.d/restore.sh
chmod +x always-initdb.d/00_run_restore.sh