# Nombre del Proyecto

Hola en este proyecto, es exclusivo para visualizar como seria full node js

## Requisitos

Es solo compresion lectora, se empieza de src/router/routes.js

## Características

Se crearon 6 API REST, donde :
1) POST - http://localhost:3000/customer - createCustomer : Es la simulacion de la creacion de un nuevo cliente
2) GET - http://localhost:3000/customer - getCustomer : Es la obtencion de la lista de usuarios, aqui se podria mandar filtros para discriminar datos
3) GET - http://localhost:3000/customer/?id=1 - getCustomerId : Es la obtencion unicamente de solo 1 usuario
4) DELETE - http://localhost:3000/customer/1 - deleteCustomer : Eliminar el registro de 1 solo usuario
5) PUT - http://localhost:3000/customer/credit - addCreditCustomer : Mandar un update para actualizar el monto del posible credito del cliente
6) PUT - http://localhost:3000/customer/1 - updateCustomer: Actualizar datos del cliente, indistintamente de cuales sean