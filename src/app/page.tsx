import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
{
  name: "Instant Devlivery",
  icon: ArrowDownToLine,
  Description: "Get your assets delivered to your email i<n seconds and dowloand them right away.",
},
{
  name: "Guaranteed Quality",
  icon: CheckCircle,
  Description: "Every asset on our platform is verified by our team to ensure our highest quality standards.No happy? We offter a 30-day refund guarantee.",
},
{
  name: "For the planet",
  icon: Leaf,
  Description: "We're pledged 1% of sales to the preservation and restoration of the natural environment.",
},
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to MarketPlace. Every asset on our plattaform is verified by
            our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/*TODO: List Products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div
            className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6
          lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="flex flex-col items-center">
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.icon className='w-12 h-12' />}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-2 text-base text-center text-muted-foreground">
                  {perk.Description}
                </p>
              </div>
            ))}            
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
