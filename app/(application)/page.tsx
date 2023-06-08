import Questions from "@/components/Questions";

export default function Page() {
  return (
    <main>
      <div className="mb-12 bg-[url(../public/bg.jpg)] bg-no-repeat bg-cover bg-bottom h-[calc(100vh-78px)]">
        <div className="section relative h-full">
          <div className="absolute max-md:top-32 md:bottom-20">
            <h1 className="text-6xl">Feel the music, feel alive.</h1>
            <h2 className="text-3xl pt-3">Welcome to SonicHub, the ultimate destination for sound enthusiasts.</h2>
          </div>
        </div>
      </div>
      <section className="pb-20 bg-gradient-to-b from-black to-white">
          <h2 className="text-6xl pt-32 text-center font-bold pb-12">
            POPULAR
          </h2>
        <div className="section">
          <div className="grid md:grid-cols-3 gap-20">
            <div className="bg-white text-black rounded-xl shadow-lg p-8">
              <p className="text-xl text-red-600 font-bold">NEW</p>
              <p className="text-2xl">Headphones ding</p>
              <p>$120.99</p>
              <img src="https://www.beatsbydre.com/content/dam/beats/web/promotions/product-assets/color/beatsstudiobudsplus-transparent.jpg"/>
            </div>
            <div className="bg-white text-black rounded-xl shadow-lg p-8">
              <p className="text-xl text-red-600 font-bold">NEW</p>
              <p className="text-2xl">Headphones ding</p>
              <p>$120.99</p>
              <img src="https://headphones.com/cdn/shop/products/Celestee11024x1024.jpg"/>
            </div>
            <div className="bg-white text-black rounded-xl shadow-lg p-8">
              <p className="text-xl text-red-600 font-bold">NEW</p>
              <p className="text-2xl">Headphones ding</p>
              <p>$120.99</p>
              <img src="https://headphones.com/cdn/shop/products/AudezeLCD-XSuspensionHB1024x1024.jpg"/>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="py-20 section flex flex-col items-center">
          <h2 className="text-6xl text-black text-center mb-8">Frequently asked questions</h2>
          <Questions list={questions}/>
        </div>
      </section>
    </main>
  )
}

const questions = [
  {
    q: 'What makes BeatsXchange different from other online stores?',
    a: 'At BeatsXchange, we specialize in offering a wide range of high-quality headphones, speakers, and accessories. Our curated selection, competitive prices, and exceptional customer service set us apart from the rest.'
  },
  {
    q: 'What brands do you carry at BeatsXchange?',
    a: 'At BeatsXchange, we primarily focus on the renowned Beats brand. We offer a variety of headphones, speakers, and accessories from the Beats lineup, known for their exceptional sound quality, sleek designs, and cutting-edge features.'
  },
  {
    q: 'Are all the products on BeatsXchange genuine and original?',
    a: 'Absolutely! We pride ourselves on providing only genuine and original products at BeatsXchange. We source our inventory directly from authorized distributors and manufacturers, ensuring that every item is authentic and meets the highest quality standards.'
  },
  {
    q: 'Do you offer any warranty on the products purchased from BeatsXchange?',
    a: 'Yes, we offer warranty coverage on all eligible products purchased from BeatsXchange. The specific warranty period and terms may vary depending on the product. Please refer to the product page or contact our customer support for detailed warranty information.'
  },
  {
    q: 'Can I return or exchange a product if I\'m not satisfied with my purchase?',
    a: 'We want you to be completely satisfied with your purchase from BeatsXchange. If, for any reason, you are not satisfied with your order, we offer a hassle-free return and exchange policy within a specified timeframe. Please review our return policy or reach out to our customer support for assistance.'
  },
  {
    q: 'What payment methods do you accept at BeatsXchange?',
    a: 'We accept various payment methods at BeatsXchange, including major credit cards (Visa, Mastercard, American Express), PayPal, and other secure payment gateways. This allows you to choose the payment option that is most convenient for you.'
  },
  {
    q: 'How long does shipping take for orders placed on BeatsXchange?',
    a: 'We strive to process and ship orders promptly. Shipping times may vary depending on your location and the shipping method chosen at checkout. Typically, orders are delivered within [insert estimated delivery timeframe] business days. You will receive a tracking number to monitor the progress of your shipment.'
  },
  {
    q: 'Can I track the status of my order?',
    a: 'Yes, you can track the status of your order at BeatsXchange. Once your order is processed and shipped, we will provide you with a tracking number. You can use this tracking number to monitor the progress of your shipment on our website or the shipping carrier\'s website.'
  },
  {
    q: 'Are there any special promotions or discounts available at BeatsXchange?',
    a: 'Yes! We frequently run special promotions, discounts, and exclusive deals at BeatsXchange. We encourage you to check our website regularly or subscribe to our newsletter to stay updated on the latest offers. This way, you can take advantage of great savings on your favorite headphones, speakers, and accessories.'
  }
]
/*
       <div className="grid md:grid-cols-2 h-[160vw] md:h-[50vw] mt-4 gap-4 mx-4">
        <div className="relative rounded-xl bg-[url(https://images.pexels.com/photos/191877/pexels-photo-191877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-no-repeat bg-center">
          <div className="p-5 absolute bottom-4 md:bottom-10">
            <h1 className="text-3xl md:text-6xl">Unleash the power of sound.</h1>
          </div>
        </div>
        <div className="relative rounded-xl bg-[url(https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-no-repeat bg-center">
          <div className="p-5 absolute bottom-4 md:bottom-10 text-black">
            <h1 className="text-3xl md:text-6xl">Experience music like never before.</h1>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-[url(https://images.pexels.com/photos/3780680/pexels-photo-3780680.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1)] bg-[-28rem_-29rem] mx-4 rounded-xl lg:bg-bottom h-[500px] lg:h-[900px] w-[calc(100vw-2rem)] relative mb-10">
        <div className="p-5 absolute bottom-4 md:bottom-10">
          <h1 className="text-6xl">Feel the music, feel alive.</h1>
          <h2 className="text-3xl pt-3">Welcome to SonicHub, the ultimate destination for sound enthusiasts.</h2>
        </div>
      </div>
*/


/*
import { PrismaClient, Product } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
  const product: Product = await prisma.product.create({
    data: {
      name: 'Kanto YU2 ',
      category: 'Speakers',
      brand: 'Kanto Living',
      price: 289.99,
      image: 'https://headphones.com/cdn/shop/products/KantoYU2MatteBlack1024x1024.jpg?v=1658561533',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

*/
