# W02D03 - Networking with TCP and HTTP

### To Do
- [ ] Discuss networking and the need for protocols
- [ ] TCP introduction
- [ ] TCP demo

### Networking
* machines that are connected together can communicate
* LAN Parties


youtube.com => ISP => routing machines => destination


1st you know the person directly (LAN)
2nd you know someone who knows the person (internet)

### Send Messages
* packets
* header (destination, origin)
* numbered 1/500 499/500

### Transmission Control Protocol (TCP)
* messages are guaranteed to arrive in order
* error recovery

### User Datagram Protocol (UDP)
* there is no defined order
* no error recovery

### Internet Protocol (IP)
* IP address
  * IPv4 255.168.8.8
  * IPv6 2001:db8:3333:4444:5555:6666:7777:8888
* Port => uniquely identifies one running process
* 65,535 ports to choose from
  * 80 HTTP
  * 443 HTTPS
  * 22 SSH
  * 5432 Postgres
  * 3000-9000 dev ports
  * <1000 is off-limits

client => wants something
server => have something

### Event-driven Programming
* n-driven programming
* code doesn't run on server start
* only run in response to certain events occurring


connection.write("Name: FOX")
connection.write("Move: up")
connection.write("Move: down")