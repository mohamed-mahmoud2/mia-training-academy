export type StaffCardPerson = { name: string; role: string; initials: string; photo?: string };

export function StaffCard({ person }: { person: StaffCardPerson }) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {person.photo ? (
        <img
          src={person.photo}
          alt={person.name}
          width={256}
          height={320}
          className="h-72 w-60 shrink-0 rounded-3xl bg-primary-soft object-cover shadow-soft sm:h-80 sm:w-64"
        />
      ) : (
        <span
          aria-hidden
          className="grid h-72 w-60 shrink-0 place-items-center rounded-3xl bg-primary text-5xl font-semibold text-primary-foreground shadow-soft sm:h-80 sm:w-64"
        >
          {person.initials.slice(0, 2)}
        </span>
      )}
      <div className="min-w-0">
        <p className="truncate text-xl font-semibold text-foreground">{person.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
      </div>
    </div>
  );
}
