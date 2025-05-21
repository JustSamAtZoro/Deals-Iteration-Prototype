import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main>
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Everyday Savings and Featured Promotions at Zoro</h1>

            {/* Limited-Time Deals */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Limited-Time Deals</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Kimberly-Clark wipes deal"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Brand logo"
                        width={40}
                        height={40}
                        className="bg-white rounded-sm p-1"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold mb-1">Flash deal!</h3>
                    <p className="mb-2">15% off select Kimberly-Clark wipes!</p>
                    <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white">Shop Now</Button>
                  </div>
                </div>

                <div className="border rounded overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="DeWalt power tools deal"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="DeWalt logo"
                        width={40}
                        height={40}
                        className="bg-white rounded-sm p-1"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold mb-1">Save on select</h3>
                    <p className="mb-2">DEWALT power tools!</p>
                    <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white">Shop Now</Button>
                  </div>
                </div>

                <div className="border rounded overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="DeWalt battery bundle deal"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="DeWalt logo"
                        width={40}
                        height={40}
                        className="bg-white rounded-sm p-1"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold mb-1">DEWALT tool + battery bundles!</h3>
                    <p className="mb-2">Get a 20V battery with select tools.</p>
                    <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white">Shop Now</Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Ways to Save */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Additional Ways to Save</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded overflow-hidden bg-[#e6f2f5]">
                  <div className="relative h-32 flex items-center justify-center">
                    <div className="bg-[#ff6d00] text-white font-bold py-1 px-3 rounded">WEEKLY DEALS</div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold mb-1">Fresh Savings on Select Items Every Week.</h3>
                    <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white mt-2">Shop Now</Button>
                  </div>
                </div>

                <div className="border rounded overflow-hidden bg-[#e6f2f5]">
                  <div className="relative h-32 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
                      <span className="text-[#0a3751] font-bold text-sm text-center">Special Deals</span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold mb-1">Limited-Time Offers from Top Brands.</h3>
                    <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white mt-2">Shop Now</Button>
                  </div>
                </div>

                <div className="border rounded overflow-hidden bg-[#e6f2f5]">
                  <div className="relative h-32 flex items-center justify-center">
                    <div className="bg-[#ff6d00] text-white font-bold py-1 px-3 rounded">CLOSEOUTS</div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold mb-1">Shop These Great Deals Before They're Gone.</h3>
                    <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white mt-2">Shop Now</Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Deals For You */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Best Deals For You</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  {
                    brand: "DEWALT",
                    name: "20V MAX XR Battery (2 Pack)",
                    originalPrice: "$199.00",
                    discount: "21% off",
                    price: "$156.97",
                    image: "/placeholder.svg?height=150&width=150",
                  },
                  {
                    brand: "DEWALT",
                    name: "20V MAX Compact 3Ah Battery 2-Pack",
                    originalPrice: "$169.00",
                    discount: "36% off",
                    price: "$107.97",
                    image: "/placeholder.svg?height=150&width=150",
                  },
                  {
                    brand: "PICGLAZE",
                    name: "PTR16500-2600-15 3.7V Button Top Header Lithium Ion Battery with PCB",
                    originalPrice: "$20.99",
                    discount: "12% off",
                    price: "$18.35",
                    image: "/placeholder.svg?height=150&width=150",
                  },
                  {
                    brand: "ULTRA-LAST",
                    name: "UltraLast CAM-NB11L Replacement Canon NB-11LH Digital Camera Battery",
                    originalPrice: "$32.99",
                    discount: "11% off",
                    price: "$29.35",
                    image: "/placeholder.svg?height=150&width=150",
                  },
                  {
                    brand: "RUST-OLEUM",
                    name: "Spray Paint, Gloss White, 12 oz",
                    originalPrice: "$10.99",
                    discount: "47% off",
                    price: "$5.89",
                    image: "/placeholder.svg?height=150&width=150",
                  },
                  {
                    brand: "RUST-OLEUM",
                    name: "Spray Paint, Ready Red, High Gloss, Solvent, 12 oz",
                    originalPrice: "$10.99",
                    discount: "29% off",
                    price: "$7.65",
                    image: "/placeholder.svg?height=150&width=150",
                  },
                ].map((product, index) => (
                  <div key={index} className="bg-white border p-2 flex flex-col">
                    <div className="text-xs font-bold text-gray-700">{product.brand}</div>
                    <Link href="/product/rust-oleum-spray-paint">
                      <div className="flex-1 flex items-center justify-center py-2">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="max-h-24 object-contain"
                        />
                      </div>
                    </Link>
                    <Link
                      href="/product/rust-oleum-spray-paint"
                      className="text-xs mb-2 line-clamp-2 h-8 hover:text-blue-600"
                    >
                      {product.name}
                    </Link>
                    <div className="text-xs mb-1">
                      <span className="line-through">{product.originalPrice}</span>
                      <span className="text-red-600 ml-1">{product.discount}</span>
                    </div>
                    <div className="font-bold mb-2">{product.price}</div>
                    {index <= 1 ? (
                      <Button variant="outline" className="text-xs h-8">
                        Choose Options
                      </Button>
                    ) : index === 2 ? (
                      <div className="text-xs text-red-600 font-semibold mb-2">Out of Stock</div>
                    ) : (
                      <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs h-8">Add to Cart</Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-6">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex items-center mx-2">
                  <span className="mx-1 text-sm font-bold">1</span>
                  <span className="mx-1 text-sm">of</span>
                  <span className="mx-1 text-sm">3</span>
                </div>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </section>

            {/* More Ways to Save */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">More Ways to Save at Zoro</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e6f2f5] p-4 rounded-lg mb-3 w-24 h-24 flex items-center justify-center">
                    <div className="bg-white p-2 rounded">
                      <span className="text-[#ff6d00] font-bold">10% off</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold mb-1">Sign up for email and get 10% off your next order.</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e6f2f5] p-4 rounded-lg mb-3 w-24 h-24 flex items-center justify-center">
                    <div className="bg-white p-2 rounded">
                      <span className="text-[#ff6d00] font-bold">30</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold mb-1">Discover monthly savings with Net 30 terms.</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e6f2f5] p-4 rounded-lg mb-3 w-24 h-24 flex items-center justify-center">
                    <div className="bg-white p-2 rounded">
                      <span className="text-[#ff6d00] font-bold">$50</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold mb-1">
                    Sign up for a business account and get free shipping over $50.
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e6f2f5] p-4 rounded-lg mb-3 w-24 h-24 flex items-center justify-center">
                    <div className="bg-white p-2 rounded text-xs font-bold">TOP BRANDS</div>
                  </div>
                  <h3 className="text-sm font-semibold mb-1">Shop our customers' favorite brands.</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e6f2f5] p-4 rounded-lg mb-3 w-24 h-24 flex items-center justify-center">
                    <div className="bg-white p-2 rounded text-xs font-bold">TOP CATEGORIES</div>
                  </div>
                  <h3 className="text-sm font-semibold mb-1">Our best-selling categories, all in one place.</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#e6f2f5] p-4 rounded-lg mb-3 w-24 h-24 flex items-center justify-center">
                    <div className="bg-white p-2 rounded text-xs font-bold">BEST SELLERS</div>
                  </div>
                  <h3 className="text-sm font-semibold mb-1">Shop the most popular products our customers love.</h3>
                </div>
              </div>
            </section>

            {/* Fast Delivery */}
            <section className="mb-12 text-center">
              <h2 className="text-2xl font-bold mb-2">Get what you need fast!</h2>
              <p className="mb-2">Most orders delivered in 1-2 business days.</p>
              <button className="text-blue-600 hover:underline">Click Here to Learn More</button>
            </section>

            {/* Promotion Rules */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4">Promotion Rules & Restrictions</h2>
              <div className="text-sm">
                <p className="mb-2">
                  <strong>*15% Off Select Kimberly-Clark Products:</strong> Maximum savings of $500. Enter code at
                  checkout. May not be combined with any other promotions, discounts, or cashback offers. Excludes tax
                  and shipping. Offer may not be applied to previous purchases. Promotion codes are subject to product
                  availability, and quantity limits may apply. Promotion is non-transferable. Offer valid from May 1,
                  2023 - expires at 11:59pm CT. Some restrictions apply. Better value alternatives may apply.
                </p>
                <button className="text-blue-600 hover:underline font-semibold flex items-center">
                  See More <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </section>

            {/* About Deals */}
            <section className="mb-12">
              <p className="text-sm mb-4">
                At Zoro, we know that our customers are always looking for a great deal on their favorite products and
                brands. That's why we offer everyday low prices on millions of items. Plus, you can shop through the
                links below to discover some of our very best offers, including limited time deals on low quantity
                items, hot buys from some of our best selling premium brands, new low prices on popular products, and
                great everyday prices on business essentials for the savvy shopper.
              </p>
              <button className="text-blue-600 hover:underline font-semibold">Rules & Restrictions</button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
