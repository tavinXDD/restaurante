const phoneNumber = "5518997844443";

const menuItems = [
  {
    name: "Baguete X-Tudo",
    category: "Baguete",
    description: "Hambúrguer, ovo, bacon, queijo prato, cebola, tomate, alface e molho da casa.",
    price: 34,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&h=700&fit=crop&auto=format",
    tag: "Mais pedido",
  },
  {
    name: "Baguete Costela Bacon",
    category: "Baguete",
    description: "Costela desfiada, bacon, queijo prato e molho de mostarda e mel.",
    price: 31,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop&auto=format",
    tag: "Especial",
  },
  {
    name: "Baguete Cupim Salada",
    category: "Baguete",
    description: "Cupim desfiado, queijo prato, tomate, alface, cebola roxa e molho da casa.",
    price: 30,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=900&h=700&fit=crop&auto=format",
    tag: "Casa",
  },
  {
    name: "Baguete Costela Salada",
    category: "Baguete",
    description: "Costela desfiada, queijo prato, tomate, alface, cebola roxa e molho da casa.",
    price: 30,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=900&h=700&fit=crop&auto=format",
    tag: "Clássico",
  },
  {
    name: "Baguete Salada",
    category: "Baguete",
    description: "Hambúrguer, queijo prato, tomate, alface, cebola e molho da casa.",
    price: 28,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=900&h=700&fit=crop&auto=format",
    tag: "Leve",
  },
  {
    name: "Baguete Burguer",
    category: "Baguete",
    description: "Hambúrguer, bacon, queijo prato, tomate e molho da casa.",
    price: 28,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&h=700&fit=crop&auto=format",
    tag: "Bacon",
  },
  {
    name: "Baguete Frango",
    category: "Baguete",
    description: "Frango desfiado, queijo prato, tomate, rúcula, cebola e molho da casa.",
    price: 25,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&h=700&fit=crop&auto=format",
    tag: "Frango",
  },
  {
    name: "Quintal Doritos",
    category: "Pão brioche",
    description: "Hambúrguer, rúcula, cream cheese, doritos e molho da casa.",
    price: 29,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop&auto=format",
    tag: "Crocante",
  },
  {
    name: "Quintal Bacon Catupiry",
    category: "Pão brioche",
    description: "Hambúrguer, bacon, catupiry, queijo muçarela e molho da casa.",
    price: 28,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&h=700&fit=crop&auto=format",
    tag: "Catupiry",
  },
  {
    name: "Quintal 3 Queijos",
    category: "Pão brioche",
    description: "Hambúrguer, tomate, queijo prato, catupiry, queijo muçarela e molho da casa.",
    price: 27,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&h=700&fit=crop&auto=format",
    tag: "Queijos",
  },
  {
    name: "Quintal Onion",
    category: "Pão brioche",
    description: "Hambúrguer, tomate, cebola empanada, rúcula, queijo prato e molho da casa.",
    price: 27,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=900&h=700&fit=crop&auto=format",
    tag: "Onion",
  },
  {
    name: "Quintal Bacon Cheddar",
    category: "Pão brioche",
    description: "Hambúrguer, cheddar, bacon, rúcula e molho da casa.",
    price: 28,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=900&h=700&fit=crop&auto=format",
    tag: "Cheddar",
  },
  {
    name: "Quintal Americano",
    category: "Pão brioche",
    description: "Hambúrguer, tomate, alface, queijo prato, ovo e molho da casa.",
    price: 26,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&h=700&fit=crop&auto=format",
    tag: "Lanche",
  },
  {
    name: "Quintal X-Bacon",
    category: "Pão brioche",
    description: "Hambúrguer, bacon, tomate, queijo prato e molho da casa.",
    price: 26,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&h=700&fit=crop&auto=format",
    tag: "Clássico",
  },
  {
    name: "Quintal Chicken",
    category: "Pão brioche",
    description: "Frango empanado, queijo muçarela, tomate, alface e molho da casa.",
    price: 25,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&h=700&fit=crop&auto=format",
    tag: "Frango",
  },
  {
    name: "Quintal Salada",
    category: "Pão brioche",
    description: "Hambúrguer, queijo prato, cebola roxa, tomate, alface e molho da casa.",
    price: 23,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=900&h=700&fit=crop&auto=format",
    tag: "Salada",
  },
  {
    name: "Quintal Burguer",
    category: "Pão brioche",
    description: "Hambúrguer, queijo prato, tomate e molho da casa.",
    price: 21,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop&auto=format",
    tag: "Simples",
  },
  {
    name: "Quintal Frango",
    category: "Pão brioche",
    description: "Frango desfiado, queijo prato, tomate, rúcula e molho da casa.",
    price: 21,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&h=700&fit=crop&auto=format",
    tag: "Frango",
  },
  {
    name: "Quintal Tudo",
    category: "Pão de hambúrguer",
    description: "1 hambúrguer de carne, ovo, bacon, salsicha, presunto, calabresa, muçarela, tomate, alface, milho e maionese.",
    price: 36,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&h=700&fit=crop&auto=format",
    tag: "Tudo",
  },
  {
    name: "Laboratório",
    category: "Pão de hambúrguer",
    description: "1 hambúrguer de carne, ovo, bacon, salsicha, presunto, muçarela, tomate, milho e maionese.",
    price: 35,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=900&h=700&fit=crop&auto=format",
    tag: "Premium",
  },
  {
    name: "X-Salada Egg",
    category: "Pão de hambúrguer",
    description: "1 hambúrguer de carne, presunto, muçarela, ovo, tomate, alface, milho e maionese.",
    price: 29,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop&auto=format",
    tag: "Egg",
  },
  {
    name: "X-Calabresa",
    category: "Pão de hambúrguer",
    description: "1 hambúrguer de carne, presunto, muçarela, calabresa, tomate e maionese.",
    price: 30,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=900&h=700&fit=crop&auto=format",
    tag: "Calabresa",
  },
  {
    name: "X-Salada",
    category: "Pão de hambúrguer",
    description: "1 hambúrguer de carne, presunto, muçarela, tomate, alface, milho e maionese.",
    price: 29,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=900&h=700&fit=crop&auto=format",
    tag: "Salada",
  },
  {
    name: "Churrasquinho Catupiry",
    category: "Churrasquinho",
    description: "Pão francês, filé mignon, molho da casa, ovo, bacon, tomate, alface, catupiry e queijo.",
    price: 38,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop&auto=format",
    tag: "Filé",
  },
  {
    name: "Churrasquinho Completo",
    category: "Churrasquinho",
    description: "Pão francês, filé mignon, molho da casa, tomate, ovo, bacon, alface e queijo.",
    price: 36,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&h=700&fit=crop&auto=format",
    tag: "Completo",
  },
  {
    name: "Churrasquinho Salada",
    category: "Churrasquinho",
    description: "Pão francês, filé mignon, molho da casa, tomate, alface e queijo.",
    price: 33,
    image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?w=900&h=700&fit=crop&auto=format",
    tag: "Salada",
  },
  {
    name: "Churrasquinho Simples",
    category: "Churrasquinho",
    description: "Pão francês, filé mignon, molho da casa, tomate e queijo.",
    price: 30,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop&auto=format",
    tag: "Simples",
  },
  {
    name: "Quintal Dog Catupiry",
    category: "Pão de dog",
    description: "2 salsichas, molho da casa, catchup, mostarda, vinagrete, milho, alface, batata palha, queijo e catupiry.",
    price: 26,
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=900&h=700&fit=crop&auto=format",
    tag: "Catupiry",
  },
  {
    name: "Quintal Dog Bacon",
    category: "Pão de dog",
    description: "2 salsichas, bacon, milho, vinagrete, catchup, mostarda, maionese, alface, purê de batata, queijo e batata palha.",
    price: 24,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=900&h=700&fit=crop&auto=format",
    tag: "Bacon",
  },
  {
    name: "Quintal Dog Frango",
    category: "Pão de dog",
    description: "2 salsichas, frango desfiado, milho, vinagrete, catchup, mostarda, maionese, alface, purê de batata, queijo e batata palha.",
    price: 22,
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=900&h=700&fit=crop&auto=format",
    tag: "Frango",
  },
  {
    name: "Quintal Dog Purê",
    category: "Pão de dog",
    description: "2 salsichas, milho, vinagrete, catchup, mostarda, maionese, alface, purê de batata, queijo e batata palha.",
    price: 20,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop&auto=format",
    tag: "Purê",
  },
  {
    name: "Quintal Dog",
    category: "Pão de dog",
    description: "2 salsichas, milho, vinagrete, catchup, mostarda, maionese, queijo e batata palha.",
    price: 18,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&h=700&fit=crop&auto=format",
    tag: "Clássico",
  },
  {
    name: "Hambúrguer",
    category: "Acréscimos",
    description: "Adicione mais hambúrguer ao seu lanche.",
    price: 6,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Filé mignon",
    category: "Acréscimos",
    description: "Mais suculência e sabor para o seu lanche.",
    price: 6,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Costela",
    category: "Acréscimos",
    description: "Costela desfiada para dar mais textura e sabor.",
    price: 6,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Cheddar",
    category: "Acréscimos",
    description: "Queijo cheddar cremoso para derreter no lanche.",
    price: 5,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Catupiry",
    category: "Acréscimos",
    description: "Catupiry para deixar o lanche mais cremoso.",
    price: 5,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Cream Cheese",
    category: "Acréscimos",
    description: "Cream cheese suave para dar um toque especial.",
    price: 5,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Onion",
    category: "Acréscimos",
    description: "Cebola crocante e dourada para dar mais sabor.",
    price: 4,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Bacon",
    category: "Acréscimos",
    description: "Bacon crocante para acentuar o sabor do lanche.",
    price: 3,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Queijo",
    category: "Acréscimos",
    description: "Queijo extra para complementar o recheio.",
    price: 3,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Saquinho de Batata",
    category: "Acréscimos",
    description: "Um saquinho de batata para acompanhar o lanche.",
    price: 3,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Doritos",
    category: "Acréscimos",
    description: "Doritos crocantes para dar textura e sabor.",
    price: 3,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Ovo",
    category: "Acréscimos",
    description: "Ovo para deixar o lanche mais completo.",
    price: 2,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Pote de molho",
    category: "Acréscimos",
    description: "Molho extra para acompanhar seu lanche.",
    price: 2,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&h=700&fit=crop&auto=format",
    tag: "Extra",
  },
  {
    name: "Combo I",
    category: "Combos",
    description: "2 Quintal Burguer + 2 batatas fritas.",
    price: 36,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop&auto=format",
    tag: "Combo",
  },
  {
    name: "Combo II",
    category: "Combos",
    description: "2 Quintal Salada + 2 batatas fritas.",
    price: 44,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&h=700&fit=crop&auto=format",
    tag: "Combo",
  },
  {
    name: "Combo III",
    category: "Combos",
    description: "2 Quintal Dog + 2 batatas fritas.",
    price: 34,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop&auto=format",
    tag: "Combo",
  },
  {
    name: "Batata frita c/ cheddar e bacon",
    category: "Porções",
    description: "Grande, crocante e coberta com cheddar e bacon.",
    price: 39,
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=900&h=700&fit=crop&auto=format",
    tag: "Porção",
  },
  {
    name: "Batata frita c/ queijo e bacon",
    category: "Porções",
    description: "Grande, com queijo derretido e bacon em cada mordida.",
    price: 38,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=900&h=700&fit=crop&auto=format",
    tag: "Porção",
  },
  {
    name: "Batata frita c/ cheddar",
    category: "Porções",
    description: "Grande com cheddar cremoso por cima.",
    price: 36,
    image: "https://images.unsplash.com/photo-1598515213712-9f99a5d8a65b?w=900&h=700&fit=crop&auto=format",
    tag: "Porção",
  },
  {
    name: "Batata frita c/ queijo",
    category: "Porções",
    description: "Escolha entre média ou grande com queijo derretido.",
    price: 35,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&h=700&fit=crop&auto=format",
    tag: "Porção",
  },
  {
    name: "Batata frita",
    category: "Porções",
    description: "Crocante, sequinha e ideal para acompanhar qualquer lanche.",
    price: 33,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=900&h=700&fit=crop&auto=format",
    tag: "Porção",
  },
  {
    name: "Bolinho de Cupim",
    category: "Porções",
    description: "6 unidades de bolinho de cupim crocante e irresistível.",
    price: 50,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop&auto=format",
    tag: "Especial",
  },
  {
    name: "Bolinho de Costela",
    category: "Porções",
    description: "6 unidades de bolinho de costela com sabor marcante da casa.",
    price: 50,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=700&fit=crop&auto=format",
    tag: "Especial",
  },
  {
    name: "Bolinho de Frango",
    category: "Porções",
    description: "6 unidades de bolinho de frango, crocante por fora e macio por dentro.",
    price: 40,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&h=700&fit=crop&auto=format",
    tag: "Frango",
  },
  {
    name: "Frango a passarinho",
    category: "Porções",
    description: "Porção generosa de frango a passarinho bem crocante.",
    price: 40,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&h=700&fit=crop&auto=format",
    tag: "Frango",
  },
  {
    name: "Isca de frango",
    category: "Porções",
    description: "Porção de tiras crocantes de frango, perfeitas para compartilhar.",
    price: 35,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&h=700&fit=crop&auto=format",
    tag: "Frango",
  },
  {
    name: "Nugget de frango",
    category: "Porções",
    description: "Nuggets crocantes de frango para dividir na mesa.",
    price: null,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=900&h=700&fit=crop&auto=format",
    tag: "Sem preço",
  },
  {
    name: "Isca de tilápia",
    category: "Porções",
    description: "Porção de isca de tilápia com textura leve e crocante.",
    price: 55,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=900&h=700&fit=crop&auto=format",
    tag: "Mar",
  },
  {
    name: "Onion",
    category: "Porções",
    description: "Anéis de cebola empanados com toque crocante e dourado.",
    price: 32,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&h=700&fit=crop&auto=format",
    tag: "Crocante",
  },
  {
    name: "Batata, frango e carne",
    category: "Porções",
    description: "Porção com batata, frango e carne para compartilhar em grande estilo.",
    price: 65,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&h=700&fit=crop&auto=format",
    tag: "Farto",
  },
  {
    name: "Mandioca, frango e carne",
    category: "Porções",
    description: "Porção de mandioca com frango e carne para mesa cheia. Escolha entre mandioca frita ou batata frita.",
    price: 65,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop&auto=format",
    tag: "Farto",
  },
  {
    name: "Tábua de Frios",
    category: "Porções",
    description: "Seleção de frios para servir como entrada ou aperitivo.",
    price: 50,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&h=700&fit=crop&auto=format",
    tag: "Aperitivo",
  },
  {
    name: "Salame",
    category: "Porções",
    description: "Porção de salame para acompanhar as bebidas e os petiscos.",
    price: 28,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b463?w=900&h=700&fit=crop&auto=format",
    tag: "Aperitivo",
  },
  {
    name: "Pururuca",
    category: "Porções",
    description: "Porção de pururuca crocante e bem temperada.",
    price: 25,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&h=700&fit=crop&auto=format",
    tag: "Crocante",
  },
  {
    name: "Mandioca frita",
    category: "Porções",
    description: "Mandioca frita dourada e crocante.",
    price: 25,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=700&fit=crop&auto=format",
    tag: "Mandioca",
  },
  {
    name: "Azeitona",
    category: "Porções",
    description: "Porção de azeitonas para servir com os petiscos e drinks.",
    price: 25,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&h=700&fit=crop&auto=format",
    tag: "Petisco",
  },
];

const categories = ["Todos", "Baguete", "Pão brioche", "Pão de dog", "Pão de hambúrguer", "Churrasquinho", "Combos", "Porções", "Acréscimos"];
const cart = [];
const deliveryFee = 5;
const money = (value) => value == null ? "Sob consulta" : value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const customizableCategories = new Set(["Baguete", "Pão brioche", "Pão de dog", "Pão de hambúrguer", "Churrasquinho"]);
const ingredientCatalog = [
  ["Pão francês", "pão francês"],
  ["Hambúrguer", "hambúrguer"],
  ["Filé mignon", "filé mignon"],
  ["Costela desfiada", "costela desfiada"],
  ["Cupim desfiado", "cupim desfiado"],
  ["Frango desfiado", "frango desfiado"],
  ["Frango empanado", "frango empanado"],
  ["Salsicha", "salsicha"],
  ["Calabresa", "calabresa"],
  ["Presunto", "presunto"],
  ["Bacon", "bacon"],
  ["Ovo", "ovo"],
  ["Cebola empanada", "cebola empanada"],
  ["Cebola roxa", "cebola roxa"],
  ["Cebola", "cebola"],
  ["Tomate", "tomate"],
  ["Alface", "alface"],
  ["Rúcula", "rúcula"],
  ["Milho", "milho"],
  ["Vinagrete", "vinagrete"],
  ["Batata palha", "batata palha"],
  ["Purê de batata", "purê de batata"],
  ["Doritos", "doritos"],
  ["Catupiry", "catupiry"],
  ["Cream cheese", "cream cheese"],
  ["Cheddar", "cheddar"],
  ["Muçarela", "muçarela"],
  ["Queijo prato", "queijo prato"],
  ["Queijo", "queijo"],
  ["Molho da casa", "molho da casa"],
  ["Maionese", "maionese"],
  ["Catchup", "catchup"],
  ["Mostarda", "mostarda"],
];
let nextCartLineId = 1;

const filterContainer = document.getElementById("filters");
const menuGrid = document.getElementById("menu-grid");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartFooter = document.getElementById("cart-footer");
const cartBackdrop = document.getElementById("cart-backdrop");
const toast = document.getElementById("toast");
let activeCategory = "Todos";
let orderMethod = "delivery";
let deliveryStreet = "";
let deliveryNumber = "";
let paymentMethod = "";
let needsChange = "";
let cashChangeFrom = "";
let checkoutMessage = "";
let toastTimeout;

function ingredientsFor(item) {
  if (!customizableCategories.has(item.category)) return [];
  const description = item.description.toLocaleLowerCase("pt-BR");
  const ingredients = ingredientCatalog
    .filter(([name, ingredient]) => description.includes(ingredient)
      && !(name === "Cebola" && /cebola (empanada|roxa)/.test(description))
      && !(name === "Mostarda" && description.includes("mostarda e mel"))
      && !(name === "Queijo" && /queijo (prato|muçarela)/.test(description)))
    .map(([name]) => name);
  const breadByCategory = {
    Baguete: "Pão baguete",
    "Pão brioche": "Pão brioche",
    "Pão de dog": "Pão de dog",
    "Pão de hambúrguer": "Pão de hambúrguer",
  };
  const bread = breadByCategory[item.category];
  return bread ? [bread, ...ingredients] : ingredients;
}

function renderFilters() {
  filterContainer.innerHTML = categories.map((category) => `
    <button class="filter-button${category === activeCategory ? " active" : ""}"
      type="button" aria-pressed="${category === activeCategory}" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function renderMenu() {
  const visibleItems = activeCategory === "Todos"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  menuGrid.innerHTML = visibleItems.map((item) => `
    <article class="menu-card">
      <div class="menu-card-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="tag">${item.tag}</span>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-title">
          <div><small>${item.category}</small><h3>${item.name}</h3></div>
          <strong>${money(item.price)}</strong>
        </div>
        <p>${item.description}</p>
        <button class="add-button" type="button" data-add="${item.name}">
          Adicionar ao pedido <span aria-hidden="true">＋</span>
        </button>
      </div>
    </article>
  `).join("") || `<p class="muted">Nenhum item disponível nesta categoria no momento.</p>`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

function renderCart() {
  const openCustomizations = new Set(
    [...cartItems.querySelectorAll("[data-customization-id][open]")].map((details) => details.dataset.customizationId),
  );
  const subtotal = cart.reduce((sum, line) => {
    const extrasTotal = [...line.extras.values()].reduce(
      (extraSum, extra) => extraSum + Number(extra.item.price ?? 0) * extra.quantity,
      0,
    );
    return sum + Number(line.item.price ?? 0) + extrasTotal;
  }, 0);
  const quantity = cart.length;
  const fee = orderMethod === "delivery" ? deliveryFee : 0;
  const total = subtotal + fee;

  cartCount.textContent = String(quantity);
  cartCount.hidden = quantity === 0;
  document.getElementById("open-cart").setAttribute("aria-label", `Abrir sacola com ${quantity} itens`);

  if (quantity === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Sua sacola ainda está vazia.</p>';
    cartFooter.hidden = true;
    return;
  }

  const extraItems = menuItems.filter((entry) => entry.category === "Acréscimos");
  cartItems.innerHTML = cart.map((line) => {
    const { id, item, removedIngredients, extras } = line;
    const ingredients = ingredientsFor(item);
    const extraTotal = [...extras.values()].reduce(
      (sum, extra) => sum + Number(extra.item.price ?? 0) * extra.quantity,
      0,
    );
    return `
      <article class="cart-line">
        <div class="cart-line-main">
          <div><h3>${item.name}</h3><p>${money(Number(item.price ?? 0) + extraTotal)} esta unidade</p></div>
          <div class="cart-line-actions">
            <button type="button" data-add="${item.name}" aria-label="Adicionar outra unidade de ${item.name}">+ Unidade</button>
            <button type="button" data-line-remove="${id}" aria-label="Remover esta unidade de ${item.name}">Remover</button>
          </div>
        </div>
        ${item.category !== "Acréscimos" ? `
          <details class="cart-personalization" data-customization-id="${id}" ${openCustomizations.has(String(id)) ? "open" : ""}>
            <summary>Personalize seu lanche</summary>
            <div class="cart-ingredients">
              <p>Ingredientes que acompanham este item</p>
              ${ingredients.length > 0 ? ingredients.map((ingredient, index) => `
                <label class="cart-ingredient">
                  <input type="checkbox" data-remove-ingredient data-line-id="${id}" data-checkbox-id="${id}-${index}"
                    value="${ingredient}" ${removedIngredients.has(ingredient) ? "checked" : ""}>
                  <span>Retirar ${ingredient}</span>
                </label>
              `).join("") : '<p class="cart-no-ingredients">Não há ingredientes removíveis cadastrados para este item.</p>'}
            </div>
            <div class="cart-extra-options">
              <p>Adicionais para esta unidade</p>
              ${extraItems.map((extra) => {
                const extraQuantity = extras.get(extra.name)?.quantity ?? 0;
                return `
                  <div class="cart-extra-option">
                    <span>${extra.name} <small>${money(extra.price)}</small></span>
                    <div class="quantity">
                      ${extraQuantity > 0 ? `
                        <button type="button" data-extra-change="-1" data-line-id="${id}" data-extra-name="${extra.name}"
                          aria-label="Remover uma unidade de ${extra.name}">−</button>
                        <span>${extraQuantity}</span>
                      ` : ""}
                      <button type="button" data-extra-change="1" data-line-id="${id}" data-extra-name="${extra.name}"
                        ${extraQuantity >= 1 ? "disabled" : ""}
                        aria-label="Adicionar ${extra.name} a ${item.name}">+</button>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </details>
          ${extras.size > 0 ? `
            <ul class="cart-selected-extras" aria-label="Acréscimos desta unidade">
              ${[...extras.values()].map((extra) => `
                <li><span>${extra.quantity}x ${extra.item.name}</span><strong>+${money(Number(extra.item.price ?? 0) * extra.quantity)}</strong></li>
              `).join("")}
            </ul>
          ` : ""}
        ` : ""}
      </article>
    `;
  }).join("");

  const orderLines = cart.flatMap(({ item, removedIngredients, extras }) => [
    `1x ${item.name}`,
    ...[...removedIngredients].map((ingredient) => `- Sem ${ingredient.toLocaleLowerCase("pt-BR")}`),
    ...(extras.size > 0
      ? [...extras.values()].map((extra) => `- Com ${extra.quantity > 1 ? `${extra.quantity}x ` : ""}${extra.item.name.toLocaleLowerCase("pt-BR")} adicional`)
      : ["- Sem adicional"]),
  ]).join("\n");
  const methodLabel = orderMethod === "delivery" ? "Entrega" : "Retirada no local";
  const paymentLabels = {
    pix: "PIX",
    cash: "Dinheiro",
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
  };
  const paymentDetails = {
    pix: "A chave PIX e as instruções serão solicitadas pelo WhatsApp.",
    cash: needsChange === "yes"
      ? `Precisa de troco para ${money(Number(cashChangeFrom))}.`
      : "Não precisa de troco.",
    credit: "Pagamento na entrega ou retirada.",
    debit: "Pagamento na entrega ou retirada.",
  };
  checkoutMessage = `Olá! Gostaria de fazer este pedido:\n${orderLines}\nModalidade: ${methodLabel}\nForma de pagamento: ${paymentLabels[paymentMethod] ?? "Não selecionada"}${paymentMethod ? `\n${paymentDetails[paymentMethod]}` : ""}\nSubtotal: ${money(subtotal)}\nTaxa de entrega: ${money(fee)}\nTotal: ${money(total)}`;
  cartFooter.hidden = false;
  cartFooter.innerHTML = `
    <label class="cart-field-label" for="order-method">Como deseja receber?</label>
    <select class="delivery-select" id="order-method">
      <option value="delivery"${orderMethod === "delivery" ? " selected" : ""}>Entrega — taxa de ${money(deliveryFee)}</option>
      <option value="pickup"${orderMethod === "pickup" ? " selected" : ""}>Retirada no local — grátis</option>
    </select>
    ${orderMethod === "delivery" ? `
      <div class="delivery-address">
        <label for="delivery-street">Rua ou Avenida</label>
        <input id="delivery-street" name="delivery-street" form="checkout-form" autocomplete="street-address" required>
        <label for="delivery-number">Número da residência</label>
        <input id="delivery-number" name="delivery-number" form="checkout-form" inputmode="numeric" required>
      </div>
    ` : ""}
    <label class="cart-field-label" for="payment-method">Forma de pagamento</label>
    <select class="delivery-select" id="payment-method" name="payment-method" form="checkout-form" required>
      <option value=""${paymentMethod === "" ? " selected" : ""} disabled>Selecione uma opção</option>
      <option value="pix"${paymentMethod === "pix" ? " selected" : ""}>PIX</option>
      <option value="cash"${paymentMethod === "cash" ? " selected" : ""}>Dinheiro</option>
      <option value="credit"${paymentMethod === "credit" ? " selected" : ""}>Cartão de crédito</option>
      <option value="debit"${paymentMethod === "debit" ? " selected" : ""}>Cartão de débito</option>
    </select>
    ${paymentMethod === "pix" ? `
      <p class="cart-payment-note">Para pagar com PIX, envie o pedido e solicite a chave e as instruções de pagamento pelo WhatsApp.</p>
    ` : ""}
    ${paymentMethod === "cash" ? `
      <label class="cart-field-label" for="needs-change">Precisa de troco?</label>
      <select class="delivery-select" id="needs-change" name="needs-change" form="checkout-form" required>
        <option value=""${needsChange === "" ? " selected" : ""} disabled>Selecione uma opção</option>
        <option value="no"${needsChange === "no" ? " selected" : ""}>Não</option>
        <option value="yes"${needsChange === "yes" ? " selected" : ""}>Sim</option>
      </select>
      ${needsChange === "yes" ? `
        <div class="delivery-address">
          <label for="cash-change-from">Troco para quanto?</label>
          <input id="cash-change-from" name="cash-change-from" form="checkout-form" type="number" min="0.01" step="0.01" required>
        </div>
      ` : ""}
    ` : ""}
    ${paymentMethod === "credit" || paymentMethod === "debit" ? `
      <p class="cart-payment-note">O pagamento será realizado na entrega ou retirada.</p>
    ` : ""}
    <div class="cart-total cart-subtotal"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
    <div class="cart-total cart-delivery-fee"><span>Taxa de entrega</span><strong>${money(fee)}</strong></div>
    <div class="cart-total"><span>Total</span><strong>${money(total)}</strong></div>
    <form id="checkout-form">
      <button class="button button-primary" type="submit">Finalizar pelo WhatsApp <span aria-hidden="true">→</span></button>
    </form>
  `;
  const streetInput = document.getElementById("delivery-street");
  const numberInput = document.getElementById("delivery-number");
  if (streetInput && numberInput) {
    streetInput.value = deliveryStreet;
    numberInput.value = deliveryNumber;
  }
  const cashChangeInput = document.getElementById("cash-change-from");
  if (cashChangeInput) cashChangeInput.value = cashChangeFrom;
}

cartItems.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-remove-ingredient]");
  if (!checkbox) return;
  const line = cart.find((entry) => String(entry.id) === checkbox.dataset.lineId);
  if (!line) return;

  if (checkbox.checked) line.removedIngredients.add(checkbox.value);
  else line.removedIngredients.delete(checkbox.value);
  const checkboxId = checkbox.dataset.checkboxId;
  renderCart();
  cartItems.querySelector(`[data-checkbox-id="${checkboxId}"]`)?.focus();
});

cartFooter.addEventListener("change", (event) => {
  if (event.target.id === "order-method") {
    orderMethod = event.target.value;
    renderCart();
  } else if (event.target.id === "payment-method") {
    paymentMethod = event.target.value;
    renderCart();
  } else if (event.target.id === "needs-change") {
    needsChange = event.target.value;
    renderCart();
  }
});

cartFooter.addEventListener("input", (event) => {
  if (event.target.id === "delivery-street") deliveryStreet = event.target.value;
  if (event.target.id === "delivery-number") deliveryNumber = event.target.value;
  if (event.target.id === "cash-change-from") cashChangeFrom = event.target.value;
});

cartFooter.addEventListener("submit", (event) => {
  if (event.target.id !== "checkout-form") return;
  event.preventDefault();
  renderCart();
  const address = orderMethod === "delivery"
    ? `\nEndereço: ${deliveryStreet.trim()}, ${deliveryNumber.trim()}`
    : "";
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`${checkoutMessage}${address}`)}`,
    "_blank",
    "noopener,noreferrer",
  );
});

function addCartLine(name) {
  const item = menuItems.find((entry) => entry.name === name);
  if (!item) return;

  cart.push({ id: nextCartLineId++, item, removedIngredients: new Set(), extras: new Map() });
  renderCart();
  showToast(`${name} foi adicionado ao pedido`);
}

filterContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderMenu();
});

document.addEventListener("click", (event) => {
  const extraButton = event.target.closest("[data-extra-change]");
  if (extraButton) {
    const { lineId, extraName, extraChange } = extraButton.dataset;
    const line = cart.find((entry) => String(entry.id) === lineId);
    const extraItem = menuItems.find((item) => item.category === "Acréscimos" && item.name === extraName);
    if (line && extraItem) {
      const currentExtra = line.extras.get(extraName);
      const nextQuantity = (currentExtra?.quantity ?? 0) + Number(extraChange);
      if (nextQuantity <= 0) {
        line.extras.delete(extraName);
      } else if (nextQuantity <= 1) {
        line.extras.set(extraName, { item: extraItem, quantity: nextQuantity });
      }
      renderCart();
    }
    return;
  }

  const removeLineButton = event.target.closest("[data-line-remove]");
  if (removeLineButton) {
    const lineIndex = cart.findIndex((entry) => String(entry.id) === removeLineButton.dataset.lineRemove);
    if (lineIndex !== -1) {
      cart.splice(lineIndex, 1);
      renderCart();
    }
    return;
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) addCartLine(addButton.dataset.add);
});

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
  mobileNav.hidden = isExpanded;
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  }
});

function closeCart() {
  cartBackdrop.hidden = true;
  document.getElementById("open-cart").focus();
}

document.getElementById("open-cart").addEventListener("click", () => {
  cartBackdrop.hidden = false;
  document.getElementById("close-cart").focus();
});
document.getElementById("close-cart").addEventListener("click", closeCart);
document.getElementById("close-cart-backdrop").addEventListener("click", closeCart);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cartBackdrop.hidden) closeCart();
});

document.getElementById("reservation-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const message = [
    "Olá! Gostaria de solicitar uma reserva.",
    `Nome: ${formData.get("name")}`,
    `Telefone: ${formData.get("phone")}`,
    `Data: ${formData.get("date")}`,
    `Pessoas: ${formData.get("guests")}`,
  ].join("\n");
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

renderFilters();
renderMenu();
renderCart();
