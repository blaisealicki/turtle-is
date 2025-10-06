var element = document.getElementById('body');
// Menu
element.insertAdjacentHTML('afterbegin', 
	`<ul class="nav">
		<li>Site
			<ul>
				<li><a href="/index.html">Home Page</a></li>
				<li><a href="/updates.html">Updates</a></li>
			</ul>
		</li>
		<li>Me
			<ul>
				<li><a href="/about-me.html">About Me</a></li>
				<li><a href="/dnd-characters.html">D&D Characters</a></li>
				<li><a href="/my-dvds.html">My DVDs</a></li>
				<li><a href="/ramblings.html">Ramblings</a></li>
				<li><a href="/im-too-tired.html">I'm Too Tired</a></li>
			</ul>
		</li>
		<li>Art
			<ul>
				<li><a href="/pictures.html">Pictures</a></li>
				<li><a href="/drawings.html">Drawings</a></li>
				<li><a href="/colors.html">Colors</a></li>
				<li><a href="/pixels.html">Pixels</a></li>
				<li><a href="/comics.html">Comics</a></li>
				<li><a href="/ninjahc.html">Comic Book</a></li>
				<li><a href="/comic/?c=localandhost">Local And Host</a></li>
				<li><a href="/comic/?c=goblins">Goblins</a></li>
			</ul>
		</li>
		<li>Other Works
			<ul>
				<li><a href="/ode-to-my-pop.html">Ode To My Pop</a></li>
				<li><a href="/program-journal.html">Program Journal</a></li>
				<li><a href="/untitled-song.html">Untitled Song</a></li>
			</ul>
		</li>
		<li>Projects
			<ul>
				<li><a href="/brilliant-ideas.html">Brilliant Ideas</a></li>
				<li><a href="/i-show.html">i-Show</a></li>
				<li><a href="/movies.html">Movies</a></li>
				<li><a href="/game.html">Game</a></li>
			</ul>
		</li>
		<li>Kmart
			<ul>
				<li><a href="/kmart.html">Kmart</a></li>
				<li><a href="/kmart-pics.html">Kmart Pics</a></li>
			</ul>
		</li>
		<li>Interactive
			<ul>
				<li><a href="/wallpapers.html">Wallpaper</a></li>
				<li><a href="/links.html">Links</a></li>
				<li><a href="https://blaise.alicki.com" target="_blank">Blog</a></li>
			</ul>
		</li>
	</ul>`);
// Header
element.insertAdjacentHTML('afterbegin', 
	`<header>
		<a href="/index.html" class="header">TURTLE INTERACTIVE SOFTWARE</a><br>
	</header>`);
// Footer
element.insertAdjacentHTML('beforeend', 
	`<footer>				
		<div style="margin-left: auto; margin-right: auto; width: 330px;">
			<button onclick="first()">&lt;&lt;</button> <button onclick="prev()">&lt;</button> <span id="comic-date" style="display: inline-block; width: 200px; text-align: center;"></span> <button onclick="next()">&gt;</button> <button onclick="last()">&gt;&gt;</button>
		</div>  		
	</footer>`);