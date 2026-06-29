export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  status: 'active' | 'invited';
}

export interface MemberListProps {
  members: Member[];
  onRemoveMember?: (id: string) => void;
  onUpdateRole?: (id: string, role: Member['role']) => void;
  isLoading?: boolean;
  error?: string | null;
}
