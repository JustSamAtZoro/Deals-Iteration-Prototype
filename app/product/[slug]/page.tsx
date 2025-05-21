import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft, Star, Plus, Minus, Check, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto py-2 px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/search" className="text-blue-600 hover:underline">
              Power Tools
            </Link>
            <span className="mx-2">/</span>
            <Link href="/search" className="text-blue-600 hover:underline">
              Drills
            </Link>
            <span className="mx-2">/</span>
            <span>Milwaukee M18 FUEL 1/2 in. Hammer Drill/Driver</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-6 px-4">
        {/* Product Main Section */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Milwaukee Drill"
                  width={400}
                  height={400}
                  className="w-full object-contain"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border p-2 cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Milwaukee Drill Thumbnail 1"
                    width={100}
                    height={100}
                    className="w-full object-contain"
                  />
                </div>
                <div className="border p-2 cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Milwaukee Drill Thumbnail 2"
                    width={100}
                    height={100}
                    className="w-full object-contain"
                  />
                </div>
                <div className="border p-2 cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Milwaukee Drill Thumbnail 3"
                    width={100}
                    height={100}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <h1 className="text-xl font-bold mb-2">MILWAUKEE 1/2 in. Hammer Drill/Driver (Tool Only)</h1>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <span className="text-sm ml-2">(24 Reviews)</span>
                </div>
                <div className="text-sm mb-2">
                  <span className="font-semibold">Item #:</span> MLW2804-20
                </div>
                <div className="text-sm mb-2">
                  <span className="font-semibold">Mfr. Model #:</span> 2804-20
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">$219.94</div>
                <div className="text-sm mb-2">
                  <span className="font-semibold">Shipping:</span> Free shipping May 13 - 14
                </div>
                <div className="text-sm mb-2 flex items-center text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  <span>In Stock</span>
                </div>
                <div className="text-sm mb-4">
                  <span className="font-semibold">Quantity:</span>
                </div>
                <div className="flex items-center mb-4">
                  <button className="border rounded-l p-2">
                    <Minus className="h-4 w-4" />
                  </button>
                  <Input type="number" defaultValue="1" className="w-16 rounded-none text-center" />
                  <button className="border rounded-r p-2">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white w-full mb-3">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <div className="flex justify-between">
                  <button className="text-sm text-blue-600 hover:underline">Compare with Similar Items</button>
                  <button className="text-sm text-blue-600 hover:underline">Add to Favorites</button>
                </div>
              </div>

              {/* Key Features */}
              <div className="border-t pt-4">
                <h2 className="font-bold mb-2">Key Features</h2>
                <ul className="text-sm space-y-1">
                  <li>• Brushless motor delivers up to 60% more power</li>
                  <li>• POWERSTATE™ Brushless Motor delivers 1,200 in-lbs of torque</li>
                  <li>• Compact design at 6.9 in. length</li>
                  <li>• REDLINK PLUS™ Intelligence prevents damage to the tool and battery</li>
                  <li>• All-metal ratcheting chuck for maximum durability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="font-bold mb-4">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="border p-2 flex flex-col">
                  <div className="text-xs font-bold text-gray-700">MILWAUKEE</div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Related product"
                      width={80}
                      height={80}
                      className="max-h-20 object-contain"
                    />
                  </div>
                  <div className="text-xs mb-2 line-clamp-2 h-8">M18 FUEL 1/2 in. Drill Driver Kit with Battery</div>
                  <div className="font-bold mb-1 text-sm">$299.00</div>
                  <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs h-8">Add to Cart</Button>
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
        </div>

        {/* Customers Also Purchased */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="font-bold mb-4">Customers Also Purchased</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="border p-2 flex flex-col">
                  <div className="text-xs font-bold text-gray-700">MILWAUKEE</div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Related product"
                      width={80}
                      height={80}
                      className="max-h-20 object-contain"
                    />
                  </div>
                  <div className="text-xs mb-2 line-clamp-2 h-8">M18 FUEL Impact Driver Kit with Battery</div>
                  <div className="font-bold mb-1 text-sm">$249.00</div>
                  <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs h-8">Add to Cart</Button>
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
        </div>

        {/* Product Information */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="font-bold mb-4">Product Information</h2>

          <div className="mb-6">
            <div className="bg-[#ff6d00] text-white text-sm font-bold py-1 px-3 inline-block mb-2">Details</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Brand</td>
                      <td className="py-2">MILWAUKEE</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Item</td>
                      <td className="py-2">Hammer Drill/Driver</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Voltage</td>
                      <td className="py-2">18V</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Cordless/Corded</td>
                      <td className="py-2">Cordless</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Chuck Size</td>
                      <td className="py-2">1/2 in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Speed</td>
                      <td className="py-2">0-2000 RPM</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Torque</td>
                      <td className="py-2">1,200 in-lbs</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Weight</td>
                      <td className="py-2">3.2 lbs</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Includes</td>
                      <td className="py-2">Tool Only</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Country of Origin</td>
                      <td className="py-2">China</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button className="text-blue-600 hover:underline text-sm mt-2">View all specifications</button>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-2">Description</h3>
            <p className="text-sm">
              The Milwaukee M18 FUEL™ 1/2" Hammer Drill Driver is the industry's most powerful brushless drill. The
              POWERSTATE™ Brushless Motor delivers 60% more power than the previous generation, 1,200 in-lbs of torque
              and up to 2,000 RPM. REDLINK PLUS™ Intelligence ensures maximum performance and protection from overload,
              overheating and over-discharge. The all-metal ratcheting chuck provides maximum bit grip and the compact
              design allows for use in tight spaces. The M18 FUEL™ 1/2" Hammer Drill Driver is compatible with the
              entire M18™ System, now offering more than 200 power tool solutions.
            </p>
          </div>
        </div>

        {/* Ratings & Reviews */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="font-bold mb-4">Ratings & Reviews</h2>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-1/3">
              <div className="flex items-center mb-2">
                <div className="text-4xl font-bold mr-2">4.8</div>
                <div className="flex flex-col">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                  </div>
                  <div className="text-sm">(24 Reviews)</div>
                </div>
              </div>

              <div className="space-y-1 mb-4">
                <div className="flex items-center">
                  <div className="text-sm mr-2">5</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[90%]"></div>
                  </div>
                  <div className="text-sm ml-2">22</div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm mr-2">4</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[5%]"></div>
                  </div>
                  <div className="text-sm ml-2">1</div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm mr-2">3</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full w-[5%]"></div>
                  </div>
                  <div className="text-sm ml-2">1</div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm mr-2">2</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[0%]"></div>
                  </div>
                  <div className="text-sm ml-2">0</div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm mr-2">1</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[0%]"></div>
                  </div>
                  <div className="text-sm ml-2">0</div>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Write a Review</Button>
            </div>

            <div className="md:w-2/3">
              <div className="space-y-4">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <div className="text-sm ml-2 font-semibold">Great drill for the price!</div>
                      </div>
                      <p className="text-sm mb-2">
                        This drill has plenty of power and the battery lasts a long time. I've used it for several
                        projects around the house and it hasn't let me down yet. Highly recommend!
                      </p>
                      <div className="text-xs text-gray-500">
                        <span className="font-semibold">John D.</span> - Verified Purchaser - May 1, 2023
                      </div>
                    </div>
                  ))}
              </div>

              <button className="text-blue-600 hover:underline text-sm mt-4">See all 24 reviews</button>
            </div>
          </div>
        </div>

        {/* Compare with Similar Products */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="font-bold mb-4">Compare with Similar Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Milwaukee Drill"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="text-sm font-bold mb-1">MILWAUKEE</div>
              <div className="text-xs mb-2 line-clamp-2 h-8">M18 FUEL 1/2 in. Hammer Drill/Driver (Tool Only)</div>
              <div className="font-bold mb-2">$219.94</div>
              <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs w-full">Add to Cart</Button>

              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="font-semibold">Voltage</span>
                  <span>18V</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Torque</span>
                  <span>1,200 in-lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Chuck Size</span>
                  <span>1/2 in.</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Weight</span>
                  <span>3.2 lbs</span>
                </div>
              </div>
            </div>

            <div className="border p-4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Milwaukee Drill Kit"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="text-sm font-bold mb-1">MILWAUKEE</div>
              <div className="text-xs mb-2 line-clamp-2 h-8">M18 FUEL 1/2 in. Hammer Drill/Driver Kit with Battery</div>
              <div className="font-bold mb-2">$299.00</div>
              <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs w-full">Add to Cart</Button>

              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="font-semibold">Voltage</span>
                  <span>18V</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Torque</span>
                  <span>1,200 in-lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Chuck Size</span>
                  <span>1/2 in.</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Weight</span>
                  <span>4.8 lbs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories For You */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="font-bold mb-4">Categories For You</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Drills", "Batteries", "Power Tools", "Hand Tools", "Safety Equipment", "Drill Bits"].map(
              (category, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full p-4 mb-2">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt={category}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-center">{category}</span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* 3 Reasons You Can Count On Us */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="font-bold mb-4">3 Reasons You Can Count On Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start">
              <div className="bg-gray-100 rounded-full p-2 mr-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Fast shipping"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">Orders ship fast</h3>
                <p className="text-xs">Most orders ship within 1 business day</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-100 rounded-full p-2 mr-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Easy returns"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">Easy returns</h3>
                <p className="text-xs">30-day hassle-free returns</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-100 rounded-full p-2 mr-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Secure checkout"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">Secure and trusted</h3>
                <p className="text-xs">We use industry-leading security to protect your information</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed & More */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="font-bold mb-4">Recently Viewed & More</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="border p-2 flex flex-col">
                  <div className="text-xs font-bold text-gray-700">MILWAUKEE</div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Related product"
                      width={80}
                      height={80}
                      className="max-h-20 object-contain"
                    />
                  </div>
                  <div className="text-xs mb-2 line-clamp-2 h-8">M18 FUEL Impact Driver Kit with Battery</div>
                  <div className="font-bold mb-1 text-sm">$249.00</div>
                  <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs h-8">Add to Cart</Button>
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
        </div>

        {/* Explore More Products */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-bold mb-4">Explore More Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-sm mb-2">Power Tools</h3>
              <ul className="text-xs space-y-1">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Drills
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Impact Drivers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Saws
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2">Brands</h3>
              <ul className="text-xs space-y-1">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Milwaukee
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    DeWalt
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Makita
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2">Accessories</h3>
              <ul className="text-xs space-y-1">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Batteries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Drill Bits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Chargers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
