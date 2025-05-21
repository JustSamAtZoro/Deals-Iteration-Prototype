import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft, ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SearchPage() {
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
            <span>Results for "rust-oleum"</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-bold mb-3">Filter</h2>

              <div className="border-t pt-3 pb-2">
                <h3 className="font-bold mb-2">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="cat1" className="mr-2" />
                    <label htmlFor="cat1" className="text-sm">
                      Paint and Coatings (74)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="cat2" className="mr-2" />
                    <label htmlFor="cat2" className="text-sm">
                      Spray Paint and Coatings (54)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="cat3" className="mr-2" />
                    <label htmlFor="cat3" className="text-sm">
                      Primers and Sealers (23)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="cat4" className="mr-2" />
                    <label htmlFor="cat4" className="text-sm">
                      Specialty Paints (12)
                    </label>
                  </div>
                </div>
                <button className="text-blue-600 text-sm mt-2 hover:underline">See More</button>
              </div>

              <div className="border-t pt-3 pb-2">
                <h3 className="font-bold mb-2">Brand</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="brand1" className="mr-2" checked />
                    <label htmlFor="brand1" className="text-sm">
                      RUST-OLEUM (74)
                    </label>
                  </div>
                </div>
              </div>

              <div className="border-t pt-3 pb-2">
                <h3 className="font-bold mb-2">Price</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="price1" className="mr-2" />
                    <label htmlFor="price1" className="text-sm">
                      Under $10 (8)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="price2" className="mr-2" />
                    <label htmlFor="price2" className="text-sm">
                      $10 - $25 (43)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="price3" className="mr-2" />
                    <label htmlFor="price3" className="text-sm">
                      $25 - $50 (21)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="price4" className="mr-2" />
                    <label htmlFor="price4" className="text-sm">
                      $50 - $100 (2)
                    </label>
                  </div>
                </div>
              </div>

              <div className="border-t pt-3 pb-2">
                <h3 className="font-bold mb-2">Color of Finish (Wet)</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="color1" className="mr-2" />
                    <label htmlFor="color1" className="text-sm">
                      Black (12)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="color2" className="mr-2" />
                    <label htmlFor="color2" className="text-sm">
                      White (10)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="color3" className="mr-2" />
                    <label htmlFor="color3" className="text-sm">
                      Gray (8)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="color4" className="mr-2" />
                    <label htmlFor="color4" className="text-sm">
                      Clear (7)
                    </label>
                  </div>
                </div>
                <button className="text-blue-600 text-sm mt-2 hover:underline">See More</button>
              </div>

              <div className="border-t pt-3 pb-2">
                <h3 className="font-bold mb-2">Container Size</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="size1" className="mr-2" />
                    <label htmlFor="size1" className="text-sm">
                      12 oz (28)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="size2" className="mr-2" />
                    <label htmlFor="size2" className="text-sm">
                      1 gal (15)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="size3" className="mr-2" />
                    <label htmlFor="size3" className="text-sm">
                      15 oz (8)
                    </label>
                  </div>
                </div>
                <button className="text-blue-600 text-sm mt-2 hover:underline">See More</button>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="flex-1">
            <div className="bg-white p-4 rounded shadow mb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm">
                  <span className="font-bold">74</span> results for <span className="font-bold">"rust-oleum"</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <button className="text-sm flex items-center">
                    Relevance <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array(20)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="border p-4 flex flex-col">
                      <div className="text-xs font-bold text-gray-700">RUST-OLEUM</div>
                      <Link href="/product/rust-oleum-spray-paint">
                        <div className="flex-1 flex items-center justify-center py-4">
                          <Image
                            src="/placeholder.svg?height=150&width=150"
                            alt="Rust-Oleum product"
                            width={120}
                            height={120}
                            className="max-h-28 object-contain"
                          />
                        </div>
                      </Link>
                      <Link
                        href="/product/rust-oleum-spray-paint"
                        className="text-xs mb-2 line-clamp-2 h-8 hover:text-blue-600"
                      >
                        Rust-Oleum Spray Paint, Gloss Black, 12 oz
                      </Link>
                      <div className="flex items-center mb-1">
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-xs ml-1">(24)</span>
                      </div>
                      <div className="font-bold mb-1">$16.19</div>
                      <div className="text-xs mb-2">
                        <span className="line-through">$19.99</span>
                        <span className="text-red-600 ml-1">19% off</span>
                      </div>
                      <div className="text-xs mb-2">Ships by Mon, May 13</div>
                      <Button className="bg-[#ff6d00] hover:bg-[#e56200] text-white text-xs h-8 w-full">
                        Add to Cart
                      </Button>
                      <div className="flex justify-between mt-2">
                        <button className="text-xs text-gray-500 flex items-center">
                          <Checkbox id={`compare-${index}`} className="mr-1 h-3 w-3" />
                          <label htmlFor={`compare-${index}`}>Compare</label>
                        </button>
                        <button className="text-xs text-gray-500 flex items-center">
                          <Checkbox id={`favorite-${index}`} className="mr-1 h-3 w-3" />
                          <label htmlFor={`favorite-${index}`}>Favorite</label>
                        </button>
                      </div>
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

            {/* You May Also Like */}
            <div className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-bold mb-4">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Related product"
                        width={80}
                        height={80}
                        className="mb-2"
                      />
                      <span className="text-xs text-center">Power Tools</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
