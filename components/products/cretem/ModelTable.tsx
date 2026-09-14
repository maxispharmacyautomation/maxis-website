import type { ProductModelTable } from "@/lib/products";

/**
 * Model comparison table with a sticky specification column.
 * Scrolls horizontally on narrow viewports instead of wrapping.
 */
export function ModelTable({ table }: { table: ProductModelTable }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-ink text-white">
              <th scope="col" className="sticky left-0 z-10 bg-ink px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 min-w-[12rem]">
                Specification
              </th>
              {table.models.map((model) => (
                <th key={model} scope="col" className="px-5 py-4 text-left font-semibold whitespace-nowrap">
                  {model}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {table.rows.map((row) => (
              <tr key={row.label} className="hover:bg-brand-tint/60 transition-colors">
                <th scope="row" className="sticky left-0 z-10 bg-white px-5 py-4 text-left font-semibold text-ink whitespace-nowrap border-r border-slate-200">
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td key={`${row.label}-${i}`} className="px-5 py-4 text-slate-700 tabular-nums whitespace-nowrap">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.models.length > 2 && (
        <p className="lg:hidden px-5 py-2.5 text-xs text-slate-500 border-t border-slate-200 bg-slate-50">
          Swipe sideways to compare all {table.models.length} models.
        </p>
      )}
    </div>
  );
}
