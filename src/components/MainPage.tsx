import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Download, Zap, Users, Code, Brain, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MainPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-600/20 text-blue-100 border-blue-600/30 w-fit">
                Natural Language Programming
              </Badge>
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Programming Made
                  <span className="text-blue-400 block">Human</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Transform natural language into executable code with Human Centric Language (HCL). 
                  Write programs the way you think, not the way machines think.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-4 text-lg"
                    asChild
                  >
                    <a
                      href="./v0.0.1 HCPL Code Structure Documentation.pdf"
                  download
                  style={{ textDecoration: "none" }}
                >
                    <>
                      <Download className="mr-2 h-5 w-5" />
                      Download .exe
                    </>
                    </a>
                  </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-400 text-blue-100 hover:bg-blue-600/20 px-8 py-4 text-lg text-[rgba(0,109,255,1)]"
                >
                  View Documentation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635775017492-1eb935a082a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTU4ODQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Programming visualization"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">How HCL Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced NLP engine converts your natural language descriptions into optimized, 
              executable code across multiple programming languages.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Write Naturally</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Describe what you want your program to do in plain English. 
                  No complex syntax or memorized commands required.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Instant Translation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our AI-powered engine processes your natural language and converts it 
                  into clean, efficient code in real-time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Execute & Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Run your programs immediately or export to popular languages 
                  like Python, JavaScript, Java, and more.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Benefits for Everyone</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">For Beginners</h3>
                    <p className="text-muted-foreground">
                      Start programming without learning complex syntax. Focus on problem-solving 
                      and logic rather than memorizing commands and structures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">For Professionals</h3>
                    <p className="text-muted-foreground">
                      Rapidly prototype ideas, generate boilerplate code, and communicate 
                      requirements more effectively with stakeholders.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">For Teams</h3>
                    <p className="text-muted-foreground">
                      Bridge the gap between technical and non-technical team members. 
                      Everyone can contribute to the development process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-medium mb-6 text-blue-400">Example HCL Code:</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="opacity-75"># Natural Language Input:</div>
                <div className="bg-blue-950/50 p-4 rounded-lg">
                  "Create a function that takes a list of numbers and returns only the even ones, sorted in ascending order"
                </div>
                <div className="opacity-75 mt-6"># Generated Python Code:</div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="text-purple-300">def</div> <div className="text-yellow-300 inline">filter_even_numbers</div><div className="inline">(numbers):</div><br/>
                  <div className="ml-4 text-blue-300">even_numbers</div> <div className="inline">= [n </div><div className="text-purple-300 inline">for</div><div className="inline"> n </div><div className="text-purple-300 inline">in</div><div className="inline"> numbers </div><div className="text-purple-300 inline">if</div><div className="inline"> n % 2 == 0]</div><br/>
                  <div className="ml-4"><div className="text-purple-300 inline">return</div><div className="inline"> </div><div className="text-yellow-300 inline">sorted</div><div className="inline">(even_numbers)</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">What Developers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "HCL completely changed how I approach programming. I can now focus on the 'what' 
                    instead of getting bogged down in the 'how'."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">SM</span>
                    </div>
                    <div>
                      <div className="font-medium">Sarah Martinez</div>
                      <div className="text-sm text-muted-foreground">Software Engineer</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "As a project manager, HCL helps me communicate technical requirements 
                    clearly and even prototype solutions myself."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">JD</span>
                    </div>
                    <div>
                      <div className="font-medium">James Davis</div>
                      <div className="text-sm text-muted-foreground">Project Manager</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "I've been coding for 15 years, and HCL has made me more productive than ever. 
                    It's like having a coding assistant that actually understands me."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">AK</span>
                    </div>
                    <div>
                      <div className="font-medium">Alex Kim</div>
                      <div className="text-sm text-muted-foreground">Senior Developer</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">Ready to Transform Your Programming?</h2>
            <p className="text-xl text-blue-100">
              Join thousands of developers who have already discovered the power of natural language programming.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-950 hover:bg-blue-50 px-12 py-4 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download HCL Now
            </Button>
            <div className="text-sm text-blue-200 space-y-2">
              <p>✓ Free 30-day trial • ✓ Windows, Mac, Linux • ✓ No credit card required</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}