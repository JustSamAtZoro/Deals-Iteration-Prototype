import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Main heading */}
      <div className="bg-[#0a3751] text-white py-4 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Tools, Parts, and Supplies for Your Business™</h1>
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative">
        <div className="container mx-auto">
          <div className="flex bg-white">
            <div className="w-2/3">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Worker with tools"
                width={600}
                height={300}
                className="h-[300px] w-full object-cover"
              />
            </div>
            <div className="w-1/3 p-6 flex flex-col justify-center">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="DeWalt logo"
                  width={120}
                  height={40}
                  className="h-10"
                />
              </div>
              <h2 className="text-lg font-bold mb-2">Get a bonus 20V battery with select tools!</h2>
              <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white w-24">Shop Now</Button>
              <p className="text-xs mt-4">*Terms & Restrictions apply. Offer ends on 6/30/23 at 11:59pm CT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Viewed & More */}
      <div className="container mx-auto py-6 px-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recently Viewed & More</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">1 of 3</span>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                brand: "ULTRA-LAST",
                name: "Nitrile Disposable Gloves, Powder Free, Blue, Value Pack",
                price: "$29.35",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                brand: "KIDDE 10-YEAR",
                name: "Smoke/Carbon Monoxide Alarm, Voice Alert, Hush, White",
                price: "$39.98",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                brand: "RUST-OLEUM",
                name: "Cold Galv Comp, Gray, 20 oz",
                price: "$16.19",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                brand: "JAMES R MODER",
                name: "Princess Collection 10 Light Chandelier",
                price: "$1,199.00",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                brand: "MILWAUKEE TOOL",
                name: 'M18 FUEL 1/2" Extended Anvil High Torque Impact Wrench',
                price: "$399.00",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                brand: "METRIC BLUE",
                name: "M12-1.75 Coarse Thread Metric Tap",
                price: "$9.99",
                image: "/placeholder.svg?height=150&width=150",
              },
            ].map((product, index) => (
              <div key={index} className="border p-2 flex flex-col">
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
                <div className="font-bold mb-2">{product.price}</div>
                {index === 5 ? (
                  <Button variant="outline" className="text-xs h-8">
                    Choose Size
                  </Button>
                ) : (
                  <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs h-8">Add to Cart</Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended For You */}
      <div className="container mx-auto py-4 px-4">
        <div className="bg-[#0a3751] p-4 rounded shadow text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recommended For You</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-white text-white hover:text-white hover:bg-[#0c4967]"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">1 of 3</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-white text-white hover:text-white hover:bg-[#0c4967]"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bg-white p-2 flex flex-col text-black">
                  <div className="text-xs font-bold text-gray-700">RUST-OLEUM</div>
                  <Link href="/product/rust-oleum-spray-paint">
                    <div className="flex-1 flex items-center justify-center py-2">
                      <Image
                        src="/placeholder.svg?height=150&width=150"
                        alt="Rust-Oleum product"
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
                    Cold Galv Spray, 12 oz
                  </Link>
                  <div className="font-bold mb-2">$16.19</div>
                  <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs h-8">Add to Cart</Button>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Stock Up On Essentials */}
      <div className="container mx-auto py-4 px-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Stock Up On Essentials</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">1 of 4</span>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-2 flex flex-col">
              <div className="text-xs font-bold text-gray-700">MARSHALL</div>
              <Link href="/product/rust-oleum-spray-paint">
                <div className="flex-1 flex items-center justify-center py-2">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Marshall product"
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
                Plastic Battery AAA, Alkaline, 1.5V DC
              </Link>
              <div className="font-bold mb-2">$13.53</div>
              <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs h-8">Add to Cart</Button>
            </div>

            <div className="border p-2 flex flex-col">
              <div className="text-xs font-bold text-gray-700">CRC</div>
              <Link href="/product/rust-oleum-spray-paint">
                <div className="flex-1 flex items-center justify-center py-2">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="CRC product"
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
                Silicone Lubricant, Aerosol Spray, 11 oz
              </Link>
              <div className="font-bold mb-2">$7.19</div>
              <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs h-8">Add to Cart</Button>
            </div>

            <div className="border p-2 flex flex-col">
              <div className="text-xs font-bold text-gray-700">MCR SAFETY</div>
              <Link href="/product/rust-oleum-spray-paint">
                <div className="flex-1 flex items-center justify-center py-2">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="MCR Safety product"
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
                Disposable Gloves, Nitrile, L, Clear, PK 100
              </Link>
              <div className="font-bold mb-2">$1.99</div>
              <Button variant="outline" className="text-xs h-8">
                Choose Size
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Deals Banner */}
      <div className="container mx-auto py-4 px-4">
        <div className="bg-[#0a3751] p-4 rounded shadow text-white relative overflow-hidden">
          <div className="relative z-10 p-4">
            <h2 className="text-lg font-bold mb-2">Don't miss these great, limited-time offers!</h2>
            <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white">Shop All Deals</Button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Deals graphic"
              width={300}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* More Categories to Explore */}
      <div className="container mx-auto py-4 px-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">More Categories to Explore</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">1 of 4</span>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Pipes, Valves & Fittings", image: "/placeholder.svg?height=100&width=100" },
              { name: "Compressors, Air Tools & Accessories", image: "/placeholder.svg?height=100&width=100" },
              { name: "Fluids & Lubricants", image: "/placeholder.svg?height=100&width=100" },
              { name: "Cutting Tools", image: "/placeholder.svg?height=100&width=100" },
              { name: "Gloves & Hand Protection", image: "/placeholder.svg?height=100&width=100" },
              { name: "Cleaning Supplies", image: "/placeholder.svg?height=100&width=100" },
            ].map((category, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="object-contain h-20"
                  />
                </div>
                <div className="text-xs">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Deals For You */}
      <div className="container mx-auto py-4 px-4">
        <div className="bg-gray-200 p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Best Deals For You</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">1 of 3</span>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                brand: "PELOSI",
                name: "Adhesive Tape, 2 in x 60 yd, 3.5 mil, Beige, Pkg Qty 24",
                price: "$18.39",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                brand: "ULTRA-LAST",
                name: "Nitrile Disposable Gloves, Powder Free, Blue, Value Pack",
                price: "$29.99",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                brand: "RUST-OLEUM",
                name: "Spray Paint, Gloss White, 12 oz",
                price: "$6.69",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                brand: "RUST-OLEUM",
                name: "Engine Enamel, Chevy Orange, 12 oz",
                price: "$7.65",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                brand: "DEWALT",
                name: "20V MAX XR Battery Li-Ion (2)",
                price: "$166.97",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                brand: "DEWALT",
                name: "20V MAX XR Battery Li-Ion 2-Pack",
                price: "$107.97",
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
                <div className="font-bold mb-2">{product.price}</div>
                {index >= 4 ? (
                  <Button variant="outline" className="text-xs h-8">
                    Choose Option
                  </Button>
                ) : (
                  <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs h-8">Add to Cart</Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your Destination for Business Supplies */}
      <div className="container mx-auto py-6 px-4">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Your Destination for Business Supplies, Equipment & Tools</h2>
          <p className="text-sm mb-4">
            Shop at Zoro and find millions of premium products from thousands of trusted brands, including tools, office
            supplies, industrial equipment, safety products, and much more. We have everything you need to keep your
            business running or get your next personal project done, with free shipping on orders over $50 when you sign
            in or sign up for an account.
          </p>
          <p className="text-sm">
            Connect with us for special offers that make your shopping experience even easier. We're always just an
            email and a keyboard click away. So browse our site, and discover why Zoro is the destination for those who
            get business done.
          </p>
        </div>
      </div>

      {/* Explore More */}
      <div className="container mx-auto py-4 px-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-sm">PVC Pipes</h3>
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                Shipping Boxes
              </Link>
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                Elbow and Sock Bins
              </Link>
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                Shipping Boxes
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-sm">PVC Pipe Fittings</h3>
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                All-Size Storage Containers
              </Link>
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                Tractor Shopping Boxes
              </Link>
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                Disposable Gloves
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-sm">PVC Pipe Sizes Guide</h3>
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                Plumbing Specialty Tools
              </Link>
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                Sulfuric Drainage Bits
              </Link>
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                AAA Non-Rechargeable Batteries
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-xs text-blue-600 hover:underline">
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
