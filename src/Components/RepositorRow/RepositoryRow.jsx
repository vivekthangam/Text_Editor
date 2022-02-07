import "./RepositoryRow.css";
import {
  BiUpArrowAlt,
  BiGitPullRequest,
  BiGitBranch,
  BiChevronDown,
  BiDesktop,
  BiGitMerge,
  BiRefresh,
  BiChevronRight
} from "react-icons/bi";
import SideBar from "../Sidebar/SideBar";
export default function RepositoryRow() {
  return (
    <div className="RepositoryRow">
      <div class="firstrow">
        <div class="item item-1 item-row">
          <div class="icons">
            <BiDesktop />
          </div>
          <div class="item item-column">
            <span>current repository</span>
            <span>Repo</span>
          </div>
          <div class="icons down-arrow">
            <BiChevronDown />
          </div>
        </div>

        <div class="item item-2 item-row" >
          <div class="icons">
            <BiGitBranch />
          </div>

          <div class="item item-row">
            <span>Current branch</span>
            <span>Repo</span>
          </div>

          <div class="icons down-arrow">
            <BiChevronDown />
          </div>
        
        </div>
        <div class="item-3 item item-row">
          <div class="icons">
            <BiRefresh />
          </div>
          <div class="item item-column">
            <span>Fetch Origin</span>
            <span>Repo</span>
          </div>
        </div>

        <div class="item-4 item item-row">
          <div class="item item-column" >
            <span>Pull</span>

            <div class="icons">
              <BiGitPullRequest />
            </div>
          </div>
          <div class="item item-column">
            <span>Push</span>

            <div class="icons">
              <BiUpArrowAlt />
            </div>
          </div>
          <div class="item item-column" >
            <span>Merge</span>

            <div class="icons">
              <BiGitMerge />
            </div>
          </div>
        </div>
        
      </div>
<SideBar></SideBar>
     
    </div>
  );
}
