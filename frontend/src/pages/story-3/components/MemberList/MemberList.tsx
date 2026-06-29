import { MemberListProps } from './MemberList.types';

export const MemberList = ({ members, onRemoveMember, onUpdateRole, isLoading, error }: MemberListProps) => {
  if (isLoading) {
    return <div className="p-4 text-center text-[var(--color-text-muted)]">Loading members...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-[var(--color-error)]">Error: {error}</div>;
  }

  if (!members.length) {
    return <div className="p-4 text-center text-[var(--color-text-muted)]">No members found.</div>;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-[var(--color-border)]">
      <table className="w-full text-left">
        <thead className="bg-[var(--color-background-subtle)]">
          <tr>
            <th className="p-4 font-semibold text-[var(--color-text-main)]">Name</th>
            <th className="p-4 font-semibold text-[var(--color-text-main)]">Role</th>
            <th className="p-4 font-semibold text-[var(--color-text-main)]">Status</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-t border-[var(--color-border)]">
              <td className="p-4">
                <div className="font-medium text-[var(--color-text-main)]">{member.name}</div>
                <div className="text-sm text-[var(--color-text-muted)]">{member.email}</div>
              </td>
              <td className="p-4">
                <select
                  value={member.role}
                  onChange={(e) => onUpdateRole?.(member.id, e.target.value as any)}
                  className="rounded border border-[var(--color-border)] p-1 bg-transparent"
                >
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                  <option value="viewer">Viewer</option>
                </select>
              </td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded-full text-xs ${member.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {member.status}
                </span>
              </td>
              <td className="p-4 text-right">
                <button
                  onClick={() => onRemoveMember?.(member.id)}
                  className="text-[var(--color-error)] hover:underline"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
