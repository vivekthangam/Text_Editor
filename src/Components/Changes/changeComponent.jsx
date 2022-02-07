import "./changeComponent.css";
import { BiGitBranch, BiChevronDown, BiDesktop } from "react-icons/bi";

export default function ChangeComponent() {
  return (
    <div class="change-gt">
      <div class="commit">
        <div class="commit-msg">
          <span>Comments Resiolved</span>
        </div>
        <div class="commit-dtls">
        <img class="profile"
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
      <span class="dot"></span>
          <span>Vivek</span>
          <span class="dot"></span>
          <span>1375730</span>
          <span class="dot"></span>
          <span>Author</span>
        </div>
      </div>
      <div class="commit">
        <div class="commit-msg">
          <span>Comments Resiolved</span>
        </div>
        <div class="commit-dtls">
        <ul class="commit-dtls">
    <li><a> <img class="profile"
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      /></a></li>
    <li><a>Vivek</a></li>
    <li><a>1375730</a></li>
</ul>
        </div>
        
      </div>
    </div>
  );
}
