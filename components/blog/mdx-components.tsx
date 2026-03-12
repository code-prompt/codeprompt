import Link from "next/link";
import {
  Children,
  type ComponentPropsWithoutRef,
  isValidElement,
  type ReactNode,
} from "react";

type PreProps = ComponentPropsWithoutRef<"pre">;
type CodeProps = ComponentPropsWithoutRef<"code">;

function extractLanguage(className?: string): string | null {
  if (!className) return null;
  const match = className.match(/language-([a-zA-Z0-9_-]+)/);
  return match?.[1] ?? null;
}

function toText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(toText).join("");
  }

  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return toText(props.children);
  }

  return "";
}

function formatLanguage(language: string | null): string {
  if (!language) return "text";
  return language.replace(/[-_]/g, " ");
}

function isTerminalLanguage(language: string | null): boolean {
  if (!language) return false;
  return ["bash", "sh", "shell", "zsh", "console", "terminal"].includes(language.toLowerCase());
}

function MdxPre({ children, className, ...props }: PreProps) {
  const nodes = Children.toArray(children);
  const first = nodes[0];

  if (!isValidElement(first)) {
    return (
      <pre className={className} {...props}>
        {children}
      </pre>
    );
  }

  const codeProps = first.props as { className?: string; children?: ReactNode };
  const language = extractLanguage(codeProps.className);
  const isTerminal = isTerminalLanguage(language);
  const normalizedCode = toText(codeProps.children).replace(/\n$/, "");
  const codeLines = normalizedCode.split("\n");

  return (
    <figure className="mdx-terminal not-prose">
      <figcaption className="mdx-terminal-topbar">
        <span className="mdx-terminal-controls" aria-hidden>
          <span className="mdx-terminal-dot mdx-terminal-dot-red" />
          <span className="mdx-terminal-dot mdx-terminal-dot-yellow" />
          <span className="mdx-terminal-dot mdx-terminal-dot-green" />
        </span>
        <span className="mdx-terminal-title">{isTerminal ? "terminal" : formatLanguage(language)}</span>
      </figcaption>
      <div className="mdx-terminal-body">
        <pre className="mdx-terminal-pre" {...props}>
          <code className={codeProps.className}>
            {codeLines.map((line, index) => (
              <span
                key={`line-${index + 1}`}
                className="mdx-terminal-line"
                data-terminal={isTerminal}
              >
                <span className="mdx-terminal-prompt" aria-hidden>
                  $
                </span>
                <span className="mdx-terminal-line-text">{line || " "}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </figure>
  );
}

function MdxCode({ className, children, ...props }: CodeProps) {
  if (extractLanguage(className)) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  return (
    <code className="font-mono text-[0.9em] text-slate-900" {...props}>
      {children}
    </code>
  );
}

function MdxAnchor({
  href = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"a"> & { href?: string }) {
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}

export const blogMdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="scroll-mt-28 text-2xl font-bold text-slate-900 sm:text-3xl" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="scroll-mt-28 text-xl font-semibold text-slate-900 sm:text-2xl" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-base leading-8 text-slate-700" {...props} />
  ),
  a: MdxAnchor,
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-5 list-disc space-y-2 pl-5 marker:text-brand" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-5 list-decimal space-y-2 pl-5 marker:font-semibold marker:text-brand" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="pl-1 text-slate-700" {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="my-6 border-l-4 border-brand/50 bg-brand/5 px-4 py-3 italic text-slate-700" {...props} />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => <hr className="my-10 border-slate-200" {...props} />,
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[620px] border-collapse text-left text-sm text-slate-700" {...props} />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => <thead className="bg-slate-100/90" {...props} />,
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => <td className="border-b border-slate-100 px-4 py-3 align-top" {...props} />,
  img: (props: ComponentPropsWithoutRef<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-8 w-full rounded-2xl border border-slate-200 bg-slate-50 object-cover"
      loading="lazy"
      {...props}
      alt={props.alt ?? ""}
    />
  ),
  pre: MdxPre,
  code: MdxCode,
};
