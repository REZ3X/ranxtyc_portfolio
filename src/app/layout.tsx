import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://rani.rejaka.id";
const siteName = "Rani Anggraini Portfolio";
const siteDescription =
	"Rani Anggraini - Electronics Communication Engineering student at SMK Negeri 2 Depok Sleman. Expert in PCB design, circuit assembly, electronic systems, and IoT devices. Specializing in multi-layer PCB prototyping, SMD soldering, RF circuit design, and automation systems.";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Rani Anggraini | Electronics Communication Engineering Portfolio",
		template: "%s | Rani Anggraini",
	},
	description: siteDescription,
	keywords: [
		"Rani Anggraini",
		"ranxtyc",
		"Electronics Communication Engineering",
		"PCB Design",
		"Circuit Design",
		"Electronic Engineering Student",
		"SMK Negeri 2 Depok Sleman",
		"PCB Prototyping",
		"Component Assembly",
		"SMD Soldering",
		"Electronic Systems",
		"IoT Devices",
		"Automation Systems",
		"RF Circuit Design",
		"Power Supply Design",
		"Multi-layer PCB",
		"Circuit Testing",
		"Oscilloscope",
		"Electronic Projects",
		"Indonesia Electronics Engineer",
		"Electrical Engineering",
		"Hardware Engineering",
		"Embedded Systems",
		"IPC-A-610",
		"Electronics Portfolio",
		"ECE Student",
		"PCB Layout",
		"Schematic Design",
		"Signal Integrity",
		"Hardware Design",
	],
	authors: [
		{
			name: "Rani Anggraini",
			url: siteUrl,
		},
	],
	creator: "Rani Anggraini",
	publisher: "Rani Anggraini",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: siteName,
		title: "Rani Anggraini | Electronics Communication Engineering Portfolio",
		description: siteDescription,
		images: [
			{
				url: "/assets/icon/rani-circle.png",
				width: 1200,
				height: 1200,
				alt: "Rani Anggraini - Electronics Communication Engineering",
				type: "image/png",
			},
			{
				url: "/assets/images/front.jpg",
				width: 1200,
				height: 630,
				alt: "Rani Anggraini Portfolio",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Rani Anggraini | Electronics Communication Engineering Portfolio",
		description: siteDescription,
		images: ["/assets/icon/rani-circle.png"],
		creator: "@rani",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: [
			{ url: "/assets/icon/rani-circle.svg", type: "image/svg+xml" },
			{ url: "/assets/icon/rani-circle.png", sizes: "any" },
		],
		apple: [
			{
				url: "/assets/icon/rani-circle.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
		other: [
			{
				rel: "mask-icon",
				url: "/assets/icon/rani-circle.svg",
			},
		],
	},
	manifest: "/manifest.json",
	alternates: {
		canonical: siteUrl,
	},
	category: "technology",
	classification: "Electronics Engineering Portfolio",
	other: {
		"google-site-verification": "your-verification-code-here",
		"msvalidate.01": "your-bing-verification-code-here",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<meta name="theme-color" content="#0ea5e9" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta name="apple-mobile-web-app-title" content="Rani Anggraini" />
				<link rel="canonical" href={siteUrl} />
			</head>
			<body
				className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-black text-white font-light`}
			>
				{children}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Rani Anggraini",
							alternateName: "rani",
							url: siteUrl,
							image: `${siteUrl}/assets/icon/rani-circle.png`,
							jobTitle: "Electronics Communication Engineering Student",
							worksFor: {
								"@type": "EducationalOrganization",
								name: "SMK Negeri 2 Depok Sleman",
							},
							alumniOf: {
								"@type": "EducationalOrganization",
								name: "SMK Negeri 2 Depok Sleman",
							},
							knowsAbout: [
								"PCB Design",
								"Electronics Engineering",
								"Circuit Design",
								"Component Assembly",
								"Embedded Systems",
								"IoT Devices",
								"Automation Systems",
							],
							sameAs: ["https://instagram.com/ranxtyc", siteUrl],
							description: siteDescription,
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: siteName,
							url: siteUrl,
							description: siteDescription,
							author: {
								"@type": "Person",
								name: "Rani Anggraini",
							},
							inLanguage: "en-US",
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "ProfilePage",
							dateCreated: new Date().toISOString(),
							dateModified: new Date().toISOString(),
							mainEntity: {
								"@type": "Person",
								name: "Rani Anggraini",
								alternateName: "rani",
								description: siteDescription,
								image: `${siteUrl}/assets/icon/rani-circle.png`,
							},
						}),
					}}
				/>
			</body>
		</html>
	);
}
