export const dummyData = [
    {
        id: 1,
        url: "malicious-site-one.com",
        imageUrl: "https://placehold.co/600x400/1f2937/9ca3af?text=Threat+Vector+1",
        ownerWallet: "0xAbCd...EfGh",
        totalProducts: 150,
        interactions: 1234,
        joined: "2024-08-15",
        status: "Active - High Threat",
        threatData: { labels: ['Phishing', 'Malware', 'Scam'], values: [65, 25, 10] }
    },
    {
        id: 2,
        url: "phishing-example-two.net",
        imageUrl: "https://placehold.co/600x400/1f2937/9ca3af?text=Threat+Vector+2",
        ownerWallet: "0x1234...5678",
        totalProducts: 75,
        interactions: 850,
        joined: "2024-07-22",
        status: "Active - Medium Threat",
        threatData: { labels: ['Phishing', 'Malware', 'Scam'], values: [80, 10, 10] }
    },
    {
        id: 3,
        url: "safe-looking-scam.org",
        imageUrl: "https://placehold.co/600x400/1f2937/9ca3af?text=Threat+Vector+3",
        ownerWallet: "0x9aBc...DeF0",
        totalProducts: 20,
        interactions: 300,
        joined: "2024-09-01",
        status: "Under Review",
        threatData: { labels: ['Phishing', 'Malware', 'Scam'], values: [30, 10, 60] }
    },
    {
        id: 4,
        url: "malware-distributor.io",
        imageUrl: "https://placehold.co/600x400/1f2937/9ca3af?text=Threat+Vector+4",
        ownerWallet: "0xFeDc...Ba98",
        totalProducts: 500,
        interactions: 5400,
        joined: "2024-06-10",
        status: "Active - Critical Threat",
        threatData: { labels: ['Phishing', 'Malware', 'Scam'], values: [5, 90, 5] }
    },
    {
        id: 5,
        url: "crypto-drainer-link.xyz",
        imageUrl: "https://placehold.co/600x400/1f2937/9ca3af?text=Threat+Vector+5",
        ownerWallet: "0x7654...3210",
        totalProducts: 5,
        interactions: 980,
        joined: "2024-09-18",
        status: "New - High Threat",
        threatData: { labels: ['Phishing', 'Malware', 'Scam'], values: [15, 5, 80] }
    },
];
