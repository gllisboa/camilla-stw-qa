/**
 * FILEPATH: /c:/00_PESSOAL/A02_MY_REPO/switch-qa-23-project-switch-qa-23-3/src/modules/forum/infra/http/routes/member.ts
 * @module memberRouter
 * @description Express router for member related routes
 */
// src/routes/memberRouter.ts
import express from "express";
import { middleware } from "../../../../../shared/infra/http";
import { getMemberByUserNameController } from "../../../useCases/members/getMemberByUserName";
import { getCurrentMemberController } from "../../../useCases/members/getCurrentMember";
import { getMemberPostCountController } from "../../../useCases/members/getMemberPostCount";
import { getMemberCommentCountController } from "../../../useCases/members/getMemberCommentsCount";
import { getMembersWithMostCommentsController } from "../../../useCases/members/getMembersWithMostComments";

const memberRouter = express.Router();

memberRouter.get("/me", (req, res) =>
  getCurrentMemberController.execute(req, res)
);

memberRouter.get("/:username", (req, res) =>
  getMemberByUserNameController.execute(req, res)
);

memberRouter.get("/postcount/:username", (req, res) =>
  getMemberPostCountController.execute(req, res)
);

memberRouter.get("/commentcount/:username", (req, res) =>
  getMemberCommentCountController.execute(req, res)
);

memberRouter.get(
  "/mostcomments",
  middleware.ensureAuthenticated(),
  (req, res) => getMembersWithMostCommentsController.execute(req, res)
);

export { memberRouter };
