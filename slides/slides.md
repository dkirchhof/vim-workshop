---
theme: theme.json
author: dkirchhof
date: DD.MM.YYYY
paging: Slide %d / %d
---

# Vim Workshop

1. IDE vs Code Editor vs Vim
1. Learning by Doing
1. Was noch so möglich ist
1. Links

Ziel: Keine Angst vor Vim!

---

# IDE vs Code Editor vs Vim

## IDE
    👍 sehr gute Unterstützung für ausgewählte Sprachen
    👍 kann ungefähr alles out of the box

    👎 startet langsam
    👎 viel zu komplex, viele Funktionen werden nie genutzt
    👎 oft nur für wenige Sprachen ausgelegt
    👎 riesig
    👎 verbraucht viele Ressourcen

---

# IDE vs Code Editor vs Vim

## Code Editor (VSCode, Sublime Text, Notepad++)
    👍 minimalistisch
       👍 relativ klein
       👍 startet schnell
       👍 einfache Lernkurve
       🤔 verbraucht weniger Ressourcen?

    👍 via Plugins erweiterbar

---

# IDE vs Code Editor vs Vim

## Vim / Neovim
    👍 bedienung fast ausschließlich mit der Tastatur
    👍 gleiche Tasten(-kombinationen) auf verschiedenen Systemen / in verschiedenen Programmen
    👍 meist "logische" Shortcuts

    👍 leichtgewichtig
       👍 startet sehr schnell
       👍 verbraucht wenig Ressourcen
       👍 performant

    👍 minimalistisch 
       👍 wenig visual clutter
       🤔 einfach zu bedienen?

    👍 direkt im Terminal ausführbar
        ❓ oftmals sowieso 1, 2 Terminals offen?!
        👍 Dateien direkt via ssh auf Server oder in docker Containern bearbeiten
        👍 schließen => Befehl in Terminal ausführen => öffnen

    👍 quasi überall schnell installierbar (wenn nicht sowieso schon installiert) (hallo visual studio)
    👍 Plugins einfach zu schreiben (Vimscript / Lua) statt ganze "Projekte" (https://code.visualstudio.com/api/get-started/your-first-extension)
    👍 Privatsphäre: kein Tracking 
    👍 PDE => Gibt kaum etwas, was nicht konfiguriert werden kann

    👍 Automatisierung
       - Makros
       - Befehle wiederholen
       - Kommandos in mehreren Dateien gleichzeitig ausführen

    🤔 eingebaute Hilfe

    🤔 Uralt (Erscheinungsjahr: 1991)
       👍 unendlich viele Plugins
       👍 battle tested
       👍 riesige Community
         
    👎 je nachdem muss man sehr viel Zeit in die Konfiguration stecken
    👎 steile Lernkurve

    🤓 Nerdfaktor

---

# IDE vs Code Editor vs Vim

## Zusammenfassung

- IDEs werden oft für große Projekte, Code Editoren für einzelene Dateien und Vim zum Bearbeiten von Remote-Dateien oder aus Versehen genutzt
- Menschen ohne Hobbys nutzen Vim

---

# Learning by Doing

## Vorbereitung

1. Vim / Neovim installieren
1. Repo klonen

---

# Learning by Doing

## Öffnen & Schließen

- vim [path]
- :q
- :w, :wq, ZZ
- :q!, ZQ

[How To Properly Quit Vim](https://www.youtube.com/watch?v=w00JOVpapxA)

### Aufgaben

1. Vim öffnen
1. Vim schließen

---

# Learning by Doing

## Modes

Vim ist ein "modaler Editor"

- normal mode (ctrl+c, Esc)
- visual mode (v, V, ctrl+v)
- insert mode (i, I, a, A, o, O, s, S, C) 
- replace mode (R)
- command mode (:, /, ?)

[Learn Vim in Less than 2 Minutes](https://www.youtube.com/watch?v=E_8B_seg8AI)

### Aufgaben

1. Vim öffnen
1. Änderungen vornehmen
1. Vim schließen

---

# Learning by Doing

## Navigation

[count] + motion

- j, k, gg, G, 20gg, ctrl+d, ctrl+u, ctrl+f, ctrl+b
- h, l, 0, ^, $, b, B, w, W, e, E
- f, F, t, T => ,, ;
- (, ), {, }

### Aufgaben

1. src/before/index.html öffnen
1. zu "klick mich" springen 
1. in erste Zeile springen
1. in letzte Zeile springen

---

# Learning by Doing

## Commands

[count] + command + [count] + [motion/text-object]

- commands: d, c, r, s
- motions: s. letzte Folie
- text-objects: aw, iw, as, is, ap, ip, at, it, a", i", ...

- undo: u
- redo: ctrl+R

### Aufgaben

1. src/before/index.html öffnen
1. "klick mich" in "Zufälligen Namen wählen" ändern
1. alles löschen
1. Löschen rückgängig machen
1. speichern

---

# Learning by Doing

## Weitere Commands

- Groß- und Kleinschreibung: ~, gu, gU
- Zahlen: ctr+a, ctrl+x

### Aufgaben:

1. src/before/index.html öffnen
1. "namen" in "Namen" ändern
1. "ergebnisse" in "Ergebnisse" ändern
1. Text in Button komplett in Großbuchstaben ändern
1. h0 in h1 ändern
1. speichern

---

# Learning by Doing

## Suchen und Ersetzen (Substitute)

- *, # => n, N
- /suche/[modifier], ?suche/[modifier] => n, N
- :s/alter text/neuer text/[modifier] => &
- :%s/alter text/neuer text/[modifier] => &
- :###,###s/alter text/neuer text/[modifier] => &

### Aufgaben:

1. alle h1 durch h2 ersetzen
1. speichern

---

# Learning by Doing

## Buffers: Arbeiten mit mehreren Dateien

Fast alles in Vim sind Buffer. Hauptsächlich natürlich die zu bearbeitenden Dateien.

- :e path
- :ls / :buffers
- :b#, :bnext, :bprev, :bfirst, :blast, :bdelete
- ctrl+6
- gf

### Aufgaben:

1. src/before/index.html öffnen
1. src/before/styles.css öffnen
1. src/before/index.js öffnen

---

# Learning by Doing

## Windows: Arbeiten mit Splitscreens

Der Editor kann in verschiedene "Windows" aufgeteilt werden.
In jedem Window wird ein Buffer angezeigt. 
Ein Buffer kann in mehreren Windows gleichzeit angezeigt werden.

- :vsplit [path], :split [path]
- ctrl+w => s, v
- ctrl+w => h, j, k, l, =
- :q, :only

---

# Learning by Doing

## Tabs

Tabs sollten nicht mit Dateien wie in anderen Editoren verwechselt werden. Tabs sind eher wie Workspaces.
Es können in einem Tab verschiedene Fensteranordnungen, verschiedene Buffer, etc. geöffnet werden 
und anschließen zwischen den Tabs gewechselt werden.
Sinnvoller Anwendungsfall: Tabs für verschiedene Projekte (z.B. Client und Server) in einer Vim-Session.

- :tabnew, :tabclose, :tabnext, :tabprev
- gt, gT

---

# Learning by Doing

## Automatisierung 1

- Befehle mit Dot-Command wiederholen
- Befehle mit Makros aufzeichnen
- Batchverarbeitung von mehreren Zeilen oder mehreren Buffern
<br />
- .
- q&lt;register&gt;, @&lt;register&gt;, @@
- :g, :norm
- :bufdo, :cdo, :tabdo

### Aufgaben

1. src/liste.txt öffnen  
1. liste fixen
1. alle Zeilen mit ":thumbsdown:" rausschmeißen 
1. alle Zeilen in `"VORNAME NACHNAME",` ändern (inkl. Anführungszeichen und Komma)

---

# Learning by Doing

## Automatisierung 2

- externe Programme ausführen: :!&lt;programm&gt;
- externe Programme ausführen und in Buffer einfügen: :read !&lt;programm&gt;

### Aufgaben

1. src/node.js öffnen
1. Programm ausführen
1. Programm ausführen und Ergebnis in Buffer einfügen
1. Ordnerstruktur in Buffer einfügen  
1. Buffer ohne zu speichern schließen

---

# Learning by Doing

## Kopieren, Ausschneiden, Einfügen und Registers

Alles was kopiert oder gelöscht wird (und vieles mehr, wie u.a. ein Makro) landet in Registern. Welche Register gibt es? => :help registers

- :registers
- ["&lt;register&gt;]y + motion, ["&lt;register&gt;]yy
- ["&lt;register&gt;]d + motion, ["&lt;register&gt;]dd, ["&lt;register&gt;]D
- ["&lt;register&gt;]p, ["&lt;register&gt;]P

1. alles aus angepasster Liste kopieren
1. Liste in src/before/index.js `names`-Array einfügen
1. speichern
1. src/before/index.html öffnen
1. Button unter Container setzen
1. speicher
1. prüfen, was in Registern steht

---

# Was noch so möglich ist

- Hop
- weitere Text-Objekte
- Snippets
- Surround
- Matchup
- Which-Key
- File-Explorer
- Buffer-Explorer
- Fuzzy-Finder
- Quickfix-List
- Formatter
- LSP
- Projektweites Suchen und Ersetzen
- Git

---

# Links

## zum Lernen
- vimtutor
- [VIM Adventures](https://vim-adventures.com)
- [Cheat Sheet](https://i.imgur.com/YLInLlY.png)

## für den Übergang
- [VSCode Vim-Plugin](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
- sämtliche Plugins für alle anderen Editoren

## für Menschen, die nicht loslassen können

- [AstroNvim](https://github.com/AstroNvim/AstroNvim)
- [NvChad](https://github.com/NvChad/NvChad)
- [LunarVim](https://github.com/LunarVim/LunarVim)

## Alternativen

- [Kakoune](https://kakoune.org)
- [Helix](https://helix-editor.com)
