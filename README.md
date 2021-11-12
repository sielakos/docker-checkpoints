# Installation

1. Install vagrant and virtualbox
2. setup virtual machine with ``vagrant up``
3. login to machine with ``vagrant ssh``

# Usage

0. ``cd /vagrant``
1. ``docker build . -t loop``
2. Start container ``docker run -d --name loop loop``
3. Wait at least 10 seconds
4. See logs ``docker logs loop``
5. Create checkpoint ``docker checkpoint create --checkpoint-dir=/home/vagrant  loop checkpoint1``
6. See that loop container no longer produces logs
7. Move checkpoint to container checkpoint directory ``sudo mv ~/checkpoint1 /var/lib/docker/containers/$(docker ps -aq --no-trunc --filter name=loop)/checkpoints/``
  This step is workaround for not working ``--checkpoint-dir=/home/vagrant`` argument to ``docker start`` which in turn is related to ``containerd`` deamon version.
8. Restart container from checkpoint ``docker start --checkpoint checkpoint1 loop``

# Local usage

May not work well on some systems. Heavly dependent on linux kernel version
1. Install CRIU: https://criu.org/Installation
2. Configure docker
  ```bash
  echo "{\"experimental\": true}" >> /etc/docker/daemon.json
  systemctl restart docker
  ```
3. Fallow step from Usage section of this document from point 1