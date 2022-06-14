const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },//
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },//
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },//
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
 
 
/* 
  const customerInfo = (order) => {
  const  pedido = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone:${order.phoneNumber}
R. ${order.address.street} N.: ${order.address.number} AP: ${order.address.apartment}`
  console.log(pedido);
  } */

const orderModifier = (order) => {
  const newBuyer = order.name = 'Luiz Silva';
  const newPayment = order.payment.total = '50';
  const pedido =`Olá ${order.name} o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e
${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`
  console.log(pedido);

}

orderModifier(order);



