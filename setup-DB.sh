#!/bin/bash

set -e

cqlsh -e "create keyspace tofdo with replication = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 }"

cqlsh -e "create table testdb.user (name text, email text, password text, PRIMARY KEY(email))"