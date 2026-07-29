
from hermes_tools import read_file, write_file
import os, re, glob

files = []
for root, dirs, fnames in os.walk("C:/projects/my-curtain-app/app"):
    for f in fnames:
        if f.endswith(".tsx") or f.endswith(".ts"):
            files.append(os.path.join(root, f))
for root, dirs, fnames in os.walk("C:/projects/my-curtain-app/components"):
    for f in fnames:
        if f.endswith(".tsx") or f.endswith(".ts"):
            files.append(os.path.join(root, f))

count = 0
for f in files:
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    original = content
    
    # List of (old, new) replacements
    reps = [
        ("text-gradient", "text-brand-500"),
        ("glass-light", "glass"),
        ("gradient-border", "card"),
        (" shadow-xl shadow-brand-500/30", ""),
        (" shadow-lg shadow-brand-500/30", ""),
        (" shadow-lg shadow-brand-500/25", ""),
        (" hover:shadow-brand-500/50", ""),
        ("bg-gradient-to-r from-brand-500/10 to-gold-500/5 border border-brand-500/10", "bg-brand-500/10 border border-brand-500/10"),
        ("bg-gradient-to-r from-brand-500/50 to-transparent", "bg-brand-500/30"),
        ("bg-gradient-to-br from-brand-500/20 to-gold-500/10 border border-brand-500/20", "bg-brand-500/10 border border-brand-500/20"),
        ("bg-gradient-to-br from-brand-500/20 to-gold-500/10", "bg-brand-500/10"),
        ("bg-gradient-to-br from-brand-500 to-gold-500", "bg-brand-500"),
        ("bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/20", "bg-red-500/10 border border-red-500/20"),
        ("bg-gradient-to-br from-brand-600/20 via-navy-800/30 to-deep-950", "bg-navy-900"),
        ("bg-gradient-to-r from-white/[0.04] to-white/[0.01]", "bg"),
    ]
    
    for old, new in reps:
        content = content.replace(old, new)
    
    # Gradient buttons - use regex to catch all variants
    content = re.sub(
        r'bg-gradient-to-r from-brand-600 to-brand-500[^"]*?rounded-xl',
        'bg-brand-500 text-navy-950 font-bold hover:bg-brand-600 transition-all rounded-xl',
        content
    )
    
    # Remaining bg-gradient-to-br that are just color classes
    # But be careful not to break the product card gradient icons
    # Check if there are any remaining bg-gradient
    if "bg-gradient-to-br" in content and "${CATEGORY_COLORS" not in content:
        content = content.replace("bg-gradient-to-br", "bg")
    if "bg-gradient-to-r" in content:
        content = content.replace("bg-gradient-to-r", "bg")
    
    if content != original:
        with open(f, "w", encoding="utf-8") as fh:
            fh.write(content)
        count += 1

print(f"Updated {count} files")
