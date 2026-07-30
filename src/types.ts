export interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  type: 'income' | 'expense' | 'transfer' | 'investment';
  date: string;
  status: 'Completed' | 'Pending' | 'Secured';
  icon: string;
}

export interface PortfolioAsset {
  symbol: string;
  name: string;
  allocation: number;
  value: number;
  change24h: number;
  color: string;
}

export interface UserProfile {
  name: string;
  email: string;
  isLoggedIn: boolean;
  balance: number;
  tier: 'Quantum Elite' | 'Private Wealth' | 'Standard';
}
