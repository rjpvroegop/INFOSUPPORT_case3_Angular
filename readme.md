# Kantilever backend

To access the API, use the base URL with the required parameters.
For example, to find the stock item with `id == 1`, use the following url in development mode:

>http://localhost:10001/bsvoorraadbeheer/stock/1

To access the API, use the base URL with the required parameters.
For example, to find the stock item with `id == 1`, use the following url in development mode:

>http://localhost:10001/bsvoorraadbeheer/stock/1

## Discovery server

### Ports

**Eureka**: 10000

**Zuul API**: 10001

**BSCatalogusbeher**: 10003

**BSKlantbeheer**: 10005

**BSBestellingenbeheer**: 10007

**BSVoorraadbeheer**: 10009

**PcSBestellen**: 10011

## Zuul API

### API Methods

API Endpoints

1. Eureka:

a. http://localhost:10000

2. Zuul API:

```
i. http://localhost:10001/{{servicename}}

ii.    http://localhost:10001/login (post a user)

iii.   http://localhost:10001/logout
```

3. BSCatalogusbeheer

a. http://localhost:10001/bscatalogusbeheer

```
i. /orders                   get all orders

ii.    /orders/posted             get posted orders

iii.   /orders/packed          get packed orders

iv.    /orders/{{id}}             get order

v. /orders/pack/{{id}}          (post) change status

vi.    /orders/send/{{id}}          (post) change status

vii.   /orders/datavaultdata/{{interval}}    get BSKeys

viii.  /orders                (post)     new order
```

4. BSKlantbeheer

a. http://localhost:10001/bsklantbeheer

```
i. /address            (post) new Address

ii.    /address/{{addressid}}          get address

iii.   /address/delete/{{addressid}}     (put)  remove address

iv.    /customers/{{id}}           get customer

v. /customers/editcustomer       (put)  edit customer

vi.    /accounts/{{id}}            get account

vii.   /accounts/login/{{username}}/{{password}}  login

viii.  /accounts/newaccount         (post) register
```

5. BSVoorraadbeheer

a. http://localhost:10001/bsvoorraadbeheer

```
i. /stock/{{productid}}            get stock item

ii.    /stock             (put)  mutate stock item

iii.   /stock                get all stock items
```

6. BSBestellingenbeheer

a. http://localhost:10001/bsbestellingenbeheer
```
i. /orders                   get all orders

ii.    /orders/posted             get posted orders

iii.   /orders/packed          get packed orders

iv.    /orders/{{id}}             get order

v. /orders/pack/{{id}}          (post) pack order

vi.    /orders/send/{{id}}          (post) send order

vii.   /orders/datavaultdata/{{interval}}    get order BSKeys of interval

viii.  /orders                (post) new order
```
7. ISDatavault

a. http://localhost:10001/isdatavault
```
i. /datavault/{{interval}}             get order BSKeys of interval
```

