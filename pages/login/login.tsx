'use client';

	import Link from "next/link";
	import { FormEvent, useState } from "react";
	import { Button } from "@/components/ui/button";
	import { Input } from "@/components/ui/input";
	import { Label } from "@/components/ui/label";
	import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

	const Login = () => {
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");

		const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			// TODO: Replace with real auth action
			console.log({ email, password });
		};

		return (
			<div className="min-h-screen flex items-center justify-center bg-background px-4">
				<Card className="w-full max-w-md">
					<CardHeader>
						<CardTitle>Login</CardTitle>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="you@example.com"
									autoComplete="email"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="••••••••"
									autoComplete="current-password"
									required
								/>
							</div>
							<Button type="submit" className="w-full">Log in</Button>
						</form>
						<p className="mt-4 text-sm text-muted-foreground">
							Don&apos;t have an account?{" "}
							<Link href="/signup" className="text-primary underline underline-offset-4">Sign up</Link>
						</p>
					</CardContent>
				</Card>
			</div>
		);
	};

	export default Login;