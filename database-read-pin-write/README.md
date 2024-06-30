# Read a sequence of values from database to apply to pins

It's more a [issue exploration][issue] really.

## How to run

Provision mysql. There is a compose file (run with docker compose or podman compose)

```bash
podman compose up -d
```

Run script

```bash
npm start
```

Then led should blink

## Tested on

- Fedora 38 + gpio-sim (virtual machine)
- Raspbian 12 (bookworm) (Raspberry Pi Zero W)

It seems to run fine against the gpio-sim and in real hardware running raspbian
12 (bookworm). Original issue reports ubuntu24.04 and a Raspberry Pi 5B. Need to
setup an environment closer to it.

The mysql didn't played nice in the zero w so i hosted it in another machine.

### Hardware info

- Pi Zero W

```bash
$ inxi -F
System:
  Host: peewee Kernel: 6.6.20+rpt-rpi-v6 arch: armv6l bits: 32 Console: pty pts/0 Distro: Raspbian
    GNU/Linux 12 (bookworm)
Machine:
  Type: ARM System: Raspberry Pi Zero W Rev 1.1 details: BCM2835 rev: 9000c1
    serial: 0000000036d5b361
CPU:
  Info: single core model: ARMv6-compatible v6l variant: arm1176jzf-s bits: 32 type: UP
  Speed (MHz): 1000 min/max: 700/1000 core: 1: 1000
Graphics:
  Device-1: bcm2835-hdmi driver: vc4_hdmi v: N/A
  Device-2: bcm2835-vc4 driver: vc4_drm v: N/A
  Display: server: X.org v: 1.21.1.7 with: Xwayland v: 22.1.9 driver: X: loaded: modesetting
    gpu: vc4_hdmi,vc4_drm tty: 189x40
  API: OpenGL Message: GL data unavailable in console. Try -G --display
Audio:
  Device-1: bcm2835-hdmi driver: vc4_hdmi
  API: ALSA v: k6.6.20+rpt-rpi-v6 status: kernel-api
  Server-1: PipeWire v: 0.3.65 status: active
Network:
  Device-1: bcm2835-mmc driver: mmc_bcm2835
  IF: wlan0 state: up mac: b8:27:eb:80:e6:34
Bluetooth:
  Device-1: pl011 driver: uart_pl011
  Report: hciconfig ID: hci0 state: up address: B8:27:EB:7F:19:CB bt-v: 2.1
  Device-2: pl011 driver: N/A
Drives:
  Local Storage: total: 30 GiB used: 4.74 GiB (15.8%)
  ID-1: /dev/mmcblk0 type: Removable model: USD size: 30 GiB
Partition:
  ID-1: / size: 28.97 GiB used: 4.63 GiB (16.0%) fs: ext4 dev: /dev/mmcblk0p2
Swap:
  ID-1: swap-1 type: file size: 100 MiB used: 94.6 MiB (94.6%) file: /var/swap
Sensors:
  System Temperatures: cpu: 42.8 C mobo: N/A
  Fan Speeds (RPM): N/A
Info:
  Processes: 130 Uptime: 5h 19m Memory: 491.9 MiB used: 194.1 MiB (39.5%) gpu: 64 MiB
  Init: systemd target: graphical (5) Shell: Bash inxi: 3.3.26
```

[issue]: https://github.com/sombriks/node-libgpiod/issues/30
