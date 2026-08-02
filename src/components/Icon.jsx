import {
  Search,
  ClipboardList,
  Sparkles,
  ShieldCheck,
  Calendar,
  IceCream,
  Wallet,
  Clock,
  Lock,
  Star,
} from 'lucide-react'

// Maps data-driven icon names to Lucide components.
const icons = {
  search: Search,
  clipboard: ClipboardList,
  sparkles: Sparkles,
  shield: ShieldCheck,
  calendar: Calendar,
  icecream: IceCream,
  wallet: Wallet,
  clock: Clock,
  lock: Lock,
  star: Star,
}

export default function Icon({ name, ...props }) {
  const Cmp = icons[name] ?? Sparkles
  return <Cmp {...props} />
}
