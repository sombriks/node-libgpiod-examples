create table pins(
  id integer primary key auto_increment,
  pin integer not null,
  val integer not null,
  created timestamp not null default current_timestamp
);
insert into pins(pin, val)
values (17, 1),
  (22, 1),
  (27, 1),
  (17, 0),
  (22, 0),
  (27, 0),
  (17, 1),
  (17, 0),
  (22, 1),
  (22, 0),
  (27, 1),
  (27, 0);