import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { BookOpen, Code, Zap, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export function HelpPage() {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sidebarItems = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
    },
    {
      id: 'language-guide',
      title: 'Language Guide',
      icon: Code,
    },
    {
      id: 'examples',
      title: 'Code Examples',
      icon: Zap,
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: AlertCircle,
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-muted/30 p-6">
        <div className="space-y-2">
          <h2 className="text-lg font-medium mb-6">Documentation</h2>
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.title}
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl">
        {activeSection === 'getting-started' && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Getting Started with HCL</h1>
              <p className="text-xl text-muted-foreground">
                Learn how to write your first Human Centric Language program and understand the basics.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Installation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>After downloading the HCL executable, follow these steps:</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Run the installer as administrator</li>
                  <li>Choose your installation directory</li>
                  <li>Add HCL to your system PATH (recommended)</li>
                  <li>Restart your terminal or command prompt</li>
                </ol>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-muted-foreground"># Verify installation</div>
                  <div>hcl --version</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your First HCL Program</CardTitle>
                <CardDescription>
                  Let's create a simple program that greets the user.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Step 1: Create a new file</h4>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      <div>hello.hcl</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Step 2: Write your natural language code</h4>
                    <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm">
                      <div className="text-green-400"># Ask the user for their name and greet them</div>
                      <div className="mt-2">Ask the user "What's your name?" and store the answer as 'name'</div>
                      <div>Display "Hello, " followed by the name and an exclamation mark</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Step 3: Run your program</h4>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      <div>hcl run hello.hcl</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'language-guide' && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">HCL Language Guide</h1>
              <p className="text-xl text-muted-foreground">
                Understand the syntax and structure of Human Centric Language.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Basic Syntax Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Badge variant="outline">Variables</Badge>
                    </h4>
                    <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm space-y-1">
                      <div>Set age to 25</div>
                      <div>Create a variable called 'username'</div>
                      <div>Store "Hello World" as message</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Badge variant="outline">Conditions</Badge>
                    </h4>
                    <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm space-y-1">
                      <div>If age is greater than 18:</div>
                      <div className="ml-4">Display "You are an adult"</div>
                      <div>Otherwise:</div>
                      <div className="ml-4">Display "You are a minor"</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Badge variant="outline">Loops</Badge>
                    </h4>
                    <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm space-y-1">
                      <div>Repeat 5 times:</div>
                      <div className="ml-4">Display "Hello"</div>
                      <div className="mt-2">For each item in the list:</div>
                      <div className="ml-4">Process the item</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Badge variant="outline">Functions</Badge>
                    </h4>
                    <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm space-y-1">
                      <div>Create a function called 'greet' that:</div>
                      <div className="ml-4">Takes a name as input</div>
                      <div className="ml-4">Returns "Hello " + name</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Types</CardTitle>
                <CardDescription>
                  HCL automatically detects data types, but you can be explicit when needed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Automatic Detection</h4>
                      <div className="bg-slate-900 text-white p-3 rounded font-mono text-sm space-y-1">
                        <div>Set count to 42</div>
                        <div>Set price to 19.99</div>
                        <div>Set name to "Alice"</div>
                        <div>Set active to true</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Explicit Types</h4>
                      <div className="bg-slate-900 text-white p-3 rounded font-mono text-sm space-y-1">
                        <div>Set count to 42 as integer</div>
                        <div>Set price to 19.99 as decimal</div>
                        <div>Set name to "Alice" as text</div>
                        <div>Set active to true as boolean</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'examples' && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Code Examples</h1>
              <p className="text-xl text-muted-foreground">
                Real-world examples to help you understand HCL patterns.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Calculator Program</CardTitle>
                <CardDescription>
                  A simple calculator that performs basic arithmetic operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm space-y-1">
                  <div className="text-green-400"># Simple Calculator</div>
                  <div className="mt-3">Ask the user "Enter first number:" and store as 'num1'</div>
                  <div>Ask the user "Enter second number:" and store as 'num2'</div>
                  <div>Ask the user "Enter operation (+, -, *, /):" and store as 'operation'</div>
                  <div className="mt-2">If operation equals "+":</div>
                  <div className="ml-4">Set result to num1 plus num2</div>
                  <div>If operation equals "-":</div>
                  <div className="ml-4">Set result to num1 minus num2</div>
                  <div>If operation equals "*":</div>
                  <div className="ml-4">Set result to num1 times num2</div>
                  <div>If operation equals "/":</div>
                  <div className="ml-4">Set result to num1 divided by num2</div>
                  <div className="mt-2">Display "Result: " followed by result</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>To-Do List Manager</CardTitle>
                <CardDescription>
                  Manage a list of tasks with add, remove, and display functionality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm space-y-1">
                  <div className="text-green-400"># To-Do List Manager</div>
                  <div className="mt-3">Create an empty list called 'tasks'</div>
                  <div className="mt-2">Repeat until user says "quit":</div>
                  <div className="ml-4">Ask "What would you like to do? (add/remove/show/quit)"</div>
                  <div className="ml-4">Store the answer as 'action'</div>
                  <div className="ml-4 mt-2">If action equals "add":</div>
                  <div className="ml-8">Ask "Enter task:" and store as 'new_task'</div>
                  <div className="ml-8">Add new_task to the tasks list</div>
                  <div className="ml-4 mt-1">If action equals "remove":</div>
                  <div className="ml-8">Ask "Enter task number to remove:" as 'index'</div>
                  <div className="ml-8">Remove item at index from tasks list</div>
                  <div className="ml-4 mt-1">If action equals "show":</div>
                  <div className="ml-8">For each task in tasks list:</div>
                  <div className="ml-12">Display the task with its number</div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'troubleshooting' && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">FAQ & Troubleshooting</h1>
              <p className="text-xl text-muted-foreground">
                Common issues and their solutions.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-500" />
                    HCL command not found
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    <p>This usually means HCL is not in your system PATH. Try these solutions:</p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Restart your terminal/command prompt</li>
                      <li>Manually add HCL to your PATH environment variable</li>
                      <li>Use the full path to the HCL executable</li>
                      <li>Reinstall HCL with administrator privileges</li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                    My natural language isn't being understood
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    <p>Try these tips to improve HCL's understanding of your code:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Use simple, clear sentences</li>
                      <li>Be specific about variable names and operations</li>
                      <li>Break complex operations into smaller steps</li>
                      <li>Use standard programming terms when possible</li>
                    </ul>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-medium mb-2">Instead of:</p>
                      <p className="font-mono text-sm">"Do some math with the numbers"</p>
                      <p className="font-medium mt-4 mb-2">Try:</p>
                      <p className="font-mono text-sm">"Add num1 and num2, then store as total"</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                    Generated code has errors
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    <p>If the generated code contains syntax errors:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Check for missing variable declarations</li>
                      <li>Ensure proper indentation in your HCL file</li>
                      <li>Verify that all referenced variables exist</li>
                      <li>Use the <code className="bg-muted px-2 py-1 rounded">--debug</code> flag for detailed error messages</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    How to export to different programming languages
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    <p>HCL can export your code to multiple languages:</p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div># Export to Python</div>
                      <div>hcl export myfile.hcl --lang python --output myfile.py</div>
                      <div className="mt-3"># Export to JavaScript</div>
                      <div>hcl export myfile.hcl --lang javascript --output myfile.js</div>
                      <div className="mt-3"># Export to Java</div>
                      <div>hcl export myfile.hcl --lang java --output MyFile.java</div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                    Performance is slow with large programs
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    <p>For better performance with large HCL programs:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Break large programs into smaller modules</li>
                      <li>Use the <code className="bg-muted px-2 py-1 rounded">--optimize</code> flag during compilation</li>
                      <li>Consider caching compiled outputs</li>
                      <li>Avoid deeply nested conditional statements</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Card>
              <CardHeader>
                <CardTitle>Still Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you can't find the answer to your question, reach out to our community:
                </p>
                <div className="space-y-2">
                  <p>📧 Email: support@humancentriclang.com</p>
                  <p>💬 Discord: HCL Community Server</p>
                  <p>📖 GitHub: github.com/hcl-lang/issues</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}