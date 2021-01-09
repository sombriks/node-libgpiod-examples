# moving car

Small node script to move a 2-wheeled car using raspberry pi.

## hardware

- 2 DC motor 5v
- 1 hg7881 chip h-bridge
- 1 raspberry pi 3 model b+
- 4 duracell + case (external power for the motors)
- 1 power bank or power supply for raspberry

## schematics

soon

## testing from command line

```bash
gpioset -m time -u 500000 0 19=0
gpioset -m time -u 500000 0 26=0
gpioset -m time -u 500000 0 13=0
gpioset -m time -u 500000 0 6=0
```

## running

just checkout this project inside your raspberry

```bash
npm install
npm start
```

now open a browser pointing to port 3000 on this rasp. an web interface will
offer some controls.
