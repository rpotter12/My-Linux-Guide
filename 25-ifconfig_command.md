# ifconfig
ifconfig command is used to configure a Linux systems network interfaces. It is used to configure, view and control network interfaces.

## Syntax
```
     ifconfig [-L] [-m] [-r] interface [create] [address_family] [address
              [dest_address]] [parameters]
     ifconfig interface destroy
     ifconfig -a [-L] [-d] [-m] [-r] [-u] [-v] [address_family]
     ifconfig -l [-d] [-u] [address_family]
     ifconfig [-L] [-d] [-m] [-r] [-u] [-v] [-C]
     ifconfig interface vlan vlan-tag vlandev iface
     ifconfig interface -vlandev iface
     ifconfig interface bonddev iface
     ifconfig interface -bonddev iface
     ifconfig interface bondmode lacp | static

```

## Description
```
     add     Another name for the alias parameter.  Introduced for compatibil-
             ity with BSD/OS.

     alias   Establish an additional network address for this interface.  This
             is sometimes useful when changing network numbers, and one wishes
             to accept packets addressed to the old interface.  If the address
             is on the same subnet as the first network address for this
             interface, a non-conflicting netmask must be given.  Usually
             0xffffffff is most appropriate.

     -alias  Remove the network address specified.  This would be used if you
             incorrectly specified an alias, or it was no longer needed.  If
             you have incorrectly set an NS address having the side effect of
             specifying the host portion, removing all NS addresses will allow
             you to respecify the host portion.

     anycast
             (Inet6 only.)  Specify that the address configured is an anycast
             address.  Based on the current specification, only routers may
             configure anycast addresses.  Anycast address will not be used as
             source address of any of outgoing IPv6 packets.

     arp     Enable the use of the Address Resolution Protocol (arp(4)) in
             mapping between network level addresses and link level addresses
             (default).  This is currently implemented for mapping between
             DARPA Internet addresses and IEEE 802 48-bit MAC addresses (Eth-
             ernet, FDDI, and Token Ring addresses).

     -arp    Disable the use of the Address Resolution Protocol (arp(4)).

     broadcast
             (Inet only.)  Specify the address to use to represent broadcasts
             to the network.  The default broadcast address is the address
             with a host part of all 1's.

     debug   Enable driver dependent debugging code; usually, this turns on
             extra console error logging.

     -debug  Disable driver dependent debugging code.

     delete  Another name for the -alias parameter.

     down    Mark an interface ``down''.  When an interface is marked
             ``down'', the system will not attempt to transmit messages
             through that interface.  If possible, the interface will be reset
             to disable reception as well.

     ether   Another name for the lladdr parameter.

     lladdr addr
             Set the link-level address on an interface.  This can be used to
             e.g. set a new MAC address on an ethernet interface, though the
             mechanism used is not ethernet-specific.  The address addr is
             specified as a series of colon-separated hex digits.  If the
             interface is already up when this option is used, it will be
             briefly brought down and then brought back up again in order to
             ensure that the receive filter in the underlying ethernet hard-
             ware is properly reprogrammed.

     media type
             If the driver supports the media selection system, set the media
             type of the interface to type.  Some interfaces support the mutu-
             ally exclusive use of one of several different physical media
             connectors.  For example, a 10Mbit/s Ethernet interface might
             support the use of either AUI or twisted pair connectors.  Set-
             ting the media type to 10base5/AUI would change the currently
             active connector to the AUI port.  Setting it to 10baseT/UTP
             would activate twisted pair.  Refer to the interfaces' driver
             specific documentation or man page for a complete list of the
             available types.

     mediaopt opts
             If the driver supports the media selection system, set the speci-
             fied media options on the interface.  The opts argument is a
             comma delimited list of options to apply to the interface.  Refer
             to the interfaces' driver specific man page for a complete list
             of available options.

     -mediaopt opts
             If the driver supports the media selection system, disable the
             specified media options on the interface.

     rxcsum, txcsum
             If the driver supports user-configurable checksum offloading,
             enable receive (or transmit) checksum offloading on the inter-
             face.  Some drivers may not be able to enable these flags inde-
             pendently of each other, so setting one may also set the other.
             The driver will offload as much checksum work as it can reliably
             support, the exact level of offloading varies between drivers.

     -rxcsum, -txcsum
             If the driver supports user-configurable checksum offloading,
             disable receive (or transmit) checksum offloading on the inter-
             face.  These settings may not always be independent of each
             other.

     tso     If the driver supports tcp(4) segmentation offloading, enable TSO
             on the interface.  Some drivers may not be able to support TSO
             for ip(4) and ip6(4) packets, so they may enable only one of
             them.

     -tso    If the driver supports tcp(4) segmentation offloading, disable
             TSO on the interface.  It will always disable TSO for ip(4) and
             ip6(4).

     lro     If the driver supports tcp(4) large receive offloading, enable
             LRO on the interface.

     -lro    If the driver supports tcp(4) large receive offloading, disable
             LRO on the interface.

     av      If supported by the driver, enable 802.1 AVB on the interface.

     -av     If supported by the driver, disable 802.1 AVB on the interface.

     vlanmtu, vlanhwtag
             If the driver offers user-configurable VLAN support, enable
             reception of extended frames or tag processing in hardware,
             respectively.  Note that this must be issued on a physical inter-
             face associated with vlan(4), not on a vlan(4) interface itself.

     -vlanmtu, -vlanhwtag
             If the driver offers user-configurable VLAN support, disable
             reception of extended frames or tag processing in hardware,
             respectively.

     create  Create the specified network pseudo-device.  If the interface is
             given without a unit number, try to create a new device with an
             arbitrary unit number.  If creation of an arbitrary device is
             successful, the new device name is printed to standard output
             unless the interface is renamed or destroyed in the same ifconfig
             invocation.

     destroy
             Destroy the specified network pseudo-device.

     plumb   Another name for the create parameter.  Included for Solaris com-
             patibility.

     unplumb
             Another name for the destroy parameter.  Included for Solaris
             compatibility.

     metric n
             Set the routing metric of the interface to n, default 0.  The
             routing metric is used by the routing protocol (routed(8)).
             Higher metrics have the effect of making a route less favorable;
             metrics are counted as additional hops to the destination network
             or host.

     mtu n   Set the maximum transmission unit of the interface to n, default
             is interface specific.  The MTU is used to limit the size of
             packets that are transmitted on an interface.  Not all interfaces
             support setting the MTU, and some interfaces have range restric-
             tions.

     netmask mask
             (Inet only.)  Specify how much of the address to reserve for sub-
             dividing networks into sub-networks.  The mask includes the net-
             work part of the local address and the subnet part, which is
             taken from the host field of the address.  The mask can be speci-
             fied as a single hexadecimal number with a leading `0x', with a
             dot-notation Internet address, or with a pseudo-network name
             listed in the network table networks(5).  The mask contains 1's
             for the bit positions in the 32-bit address which are to be used
             for the network and subnet parts, and 0's for the host part.  The
             mask should contain at least the standard network portion, and
             the subnet field should be contiguous with the network portion.

             The netmask can also be specified in CIDR notation after the
             address.  See the address option above for more information.

     prefixlen len
             (Inet6 only.)  Specify that len bits are reserved for subdividing
             networks into sub-networks.  The len must be integer, and for
             syntactical reason it must be between 0 to 128.  It is almost
             always 64 under the current IPv6 assignment rule.  If the parame-
             ter is omitted, 64 is used.

             The prefix can also be specified using the slash notation after
             the address.  See the address option above for more information.

     remove  Another name for the -alias parameter.  Introduced for compati-
             bility with BSD/OS.

     link[0-2]
             Enable special processing of the link level of the interface.
             These three options are interface specific in actual effect, how-
             ever, they are in general used to select special modes of opera-
             tion.  An example of this is to enable SLIP compression, or to
             select the connector type for some Ethernet cards.  Refer to the
             man page for the specific driver for more information.

     -link[0-2]
             Disable special processing at the link level with the specified
             interface.

     up      Mark an interface ``up''.  This may be used to enable an inter-
             face after an ``ifconfig down''.  It happens automatically when
             setting the first address on an interface.  If the interface was
             reset when previously marked down, the hardware will be re-ini-
             tialized.

     The following parameters are for ICMPv6 Neighbor Discovery Protocol.
     Note that the address family keyword ``inet6'' is needed for them:

     nud     Perform network unreachability detection (NUD).

     -nud    Do not perform network unreachability detection (NUD).

     ifdisabled
             Disable all IPv6 communication on the interface.

     -ifdisabled
             Do not disable all IPv6 communication on the interface.

     insecure
             Disable the processing of Secure Neighbor Discovery (SEND).

     -insecure
             Do not disabled the processing of Secure Neighbor Discovery
             (SEND).
```
