create table pins(
  id integer primary key auto_increment,
  pin integer not null,
  val integer not null,
  created timestamp not null default current_timestamp 
);

insert into pins(pin,val) 
  values  (13,1),
          (13,0),
          (13,1),
          (13,0),
          (13,0),
          (13,1); 
